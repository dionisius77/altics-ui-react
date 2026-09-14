import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import preset from "../tailwind.preset";
import { plugins, themeExtend } from "../theme/tailwind-theme";

// Figma is the source of truth; these tests lock the mapping so a partial
// edit (token without config, config without token) fails loudly.
const tokensCss = readFileSync(
  join(process.cwd(), "src/theme/tokens.css"),
  "utf8",
);
function rootBlock(): string {
  return tokensCss.slice(0, tokensCss.indexOf(".dark"));
}

function darkBlock(): string {
  const start = tokensCss.indexOf(".dark");
  const end = tokensCss.indexOf("@media");
  return tokensCss.slice(start, end === -1 ? undefined : end);
}

function definedVars(css: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const m of css.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) {
    map.set(m[1], m[2].trim());
  }
  return map;
}

function referencedVars(value: unknown, out: Set<string> = new Set()): Set<string> {
  if (typeof value === "string") {
    for (const m of value.matchAll(/var\(--([\w-]+)\)/g)) out.add(m[1]);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) referencedVars(v, out);
  }
  return out;
}

describe("Tailwind preset", () => {
  it("ships no content globs (docs: content replaces, never merges)", () => {
    expect(preset).not.toHaveProperty("content");
    expect(preset.theme.extend).toBe(themeExtend);
    expect(preset.plugins).toBe(plugins);
    expect(plugins.length).toBeGreaterThan(0);
  });

  it("every var referenced by the theme exists in tokens.css", () => {
    const defined = definedVars(rootBlock());
    const missing = [...referencedVars(themeExtend)].filter((v) => !defined.has(v));
    expect(missing).toEqual([]);
  });

  it("resolves spacing/width/radius to rem, zero, or 9999px", () => {
    const defined = definedVars(rootBlock());
    const scales = {
      ...themeExtend.spacing,
      ...themeExtend.width,
      ...themeExtend.borderRadius,
      ...themeExtend.maxWidth,
      ...themeExtend.padding,
    };
    for (const [key, ref] of Object.entries(scales)) {
      const name = [...ref.matchAll(/var\(--([\w-]+)\)/g)].map((m) => m[1]);
      expect(name, key).toHaveLength(1);
      expect(defined.get(name[0]), key).toMatch(/^(0|[\d.]+rem|9999px)$/);
    }
  });

  it("keeps dimensions theme-invariant (no overrides in .dark)", () => {
    const darkVars = definedVars(darkBlock());
    const themed = [...darkVars.keys()].filter((v) =>
      /^(spacing|width|radius|container|paragraph)-/.test(v),
    );
    expect(themed).toEqual([]);
  });

  it("defines every .dark override in :root with a valid value", () => {
    const root = definedVars(rootBlock());
    const dark = definedVars(darkBlock());
    expect(dark.size).toBeGreaterThan(0);
    for (const [name, value] of dark) {
      expect(root.has(name), `${name} missing in :root`).toBe(true);
      expect(value.length, `${name} empty`).toBeGreaterThan(0);
    }
  });

  it("keeps the system-dark media block consistent with .dark", () => {
    const dark = definedVars(darkBlock());
    const mediaStart = tokensCss.indexOf("@media");
    expect(mediaStart, "media block missing").toBeGreaterThan(-1);
    const media = definedVars(tokensCss.slice(mediaStart));
    expect(media.size).toBeGreaterThan(0);
    for (const [name, value] of media) {
      expect(dark.get(name), `${name} differs from .dark`).toBe(value);
    }
  });

  it("defines no token twice in :root (no last-wins shadows)", () => {
    const counts = new Map<string, number>();
    for (const m of rootBlock().matchAll(/--([\w-]+)\s*:/g)) {
      counts.set(m[1], (counts.get(m[1]) ?? 0) + 1);
    }
    const dupes = [...counts.entries()].filter(([, n]) => n > 1);
    expect(dupes).toEqual([]);
  });

  it("keeps triplet colors in H S% L% shape", () => {
    const defined = definedVars(rootBlock());
    const triplets = [...defined.entries()].filter(([, v]) =>
      /^[\d.\s%]+$/.test(v) && v.includes("%"),
    );
    expect(triplets.length).toBeGreaterThan(0);
    for (const [name, value] of triplets) {
      expect(value, name).toMatch(/^\d{1,3}\s+\d{1,3}%\s+\d{1,3}%$/);
    }
  });
});
