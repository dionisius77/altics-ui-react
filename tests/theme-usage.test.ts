import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import resolveConfig from "tailwindcss/resolveConfig";
import preset from "../tailwind.preset";
import { themeExtend } from "../theme/tailwind-theme";

const ROOT = process.cwd();
const SRC = join(ROOT, "src/components");
const tokensCss = readFileSync(join(ROOT, "src/theme/tokens.css"), "utf8");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolved = resolveConfig(preset as any) as any;

/** "primary.DEFAULT" -> "primary", "primary.600" -> "primary-600". */
function flattenKeys(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object") return [prefix];
  const out: string[] = [];
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    const joined = key === "DEFAULT" ? prefix : prefix ? `${prefix}-${key}` : key;
    out.push(...flattenKeys(child, joined));
  }
  return out;
}

function flattenValues(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value === null || typeof value !== "object") return [];
  return Object.values(value as Record<string, unknown>).flatMap(flattenValues);
}

/**
 * Which Tailwind theme namespace backs each colour utility family.
 * bg-* resolves from colors, text-* from textColor, and so on. Getting this
 * wrong is exactly the bug this file guards: brand-secondary exists under
 * textColor, so text-brand-secondary worked while bg-brand-secondary was dead.
 */
const NAMESPACE_BY_FAMILY = {
  bg: "colors",
  text: "textColor",
  border: "borderColor",
  ring: "ringColor",
  fill: "fill",
  stroke: "stroke",
} as const;

type Family = keyof typeof NAMESPACE_BY_FAMILY;

const namespaces = Object.fromEntries(
  Object.entries(NAMESPACE_BY_FAMILY).map(([family, key]) => [
    family,
    new Set(flattenKeys(resolved.theme[key])),
  ]),
) as Record<Family, Set<string>>;

/**
 * Only classes that name one of our tokens are judged. The roots come from the
 * namespaces we extend, plus Tailwind's palette names, so text-sm / text-center
 * / border-2 / ring-inset are ignored without a denylist to maintain.
 */
const tokenRoots = new Set(
  [
    ...Object.keys(themeExtend.colors ?? {}),
    ...Object.keys(themeExtend.textColor ?? {}),
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "black",
    "white",
  ].map((key) => key.split("-")[0]),
);

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry) ? [path] : [];
  });
}

interface Usage {
  file: string;
  className: string;
  family: Family;
  namespace: string;
}

function usagesIn(file: string): Usage[] {
  const source = readFileSync(file, "utf8");
  const found: Usage[] = [];
  for (const literal of source.matchAll(/["'`]([^"'`\n]*)["'`]/g)) {
    for (const raw of literal[1].split(/\s+/)) {
      if (
        !raw ||
        raw.includes("[") ||
        raw.includes("$") ||
        raw.includes("{") ||
        raw.includes("(")
      ) {
        continue;
      }
      // strip variant prefixes (hover:, focus-within:, disabled:, …) and !opacity
      const token = raw.split(":").pop()!.replace(/^!/, "").split("/")[0];
      const match = /^(bg|text|border|ring|fill|stroke)-(.+)$/.exec(token);
      if (!match) continue;
      const family = match[1] as Family;
      const key = match[2];
      if (!tokenRoots.has(key.split("-")[0])) continue;
      found.push({
        file: relative(ROOT, file),
        className: token,
        family,
        namespace: NAMESPACE_BY_FAMILY[family],
      });
    }
  }
  return found;
}

describe("colour utility contract", () => {
  const usages = sourceFiles(SRC).flatMap(usagesIn);

  it("finds colour utility usages to check", () => {
    expect(usages.length).toBeGreaterThan(20);
  });

  it("every token-named colour utility is reachable from its Tailwind namespace", () => {
    const unreachable = usages
      .filter((u) => !namespaces[u.family].has(u.className.slice(u.family.length + 1)))
      .map((u) => `${u.file}: ${u.className} (missing from theme.${u.namespace})`);
    expect(unreachable).toEqual([]);
  });

  it("every --color-* the theme points at exists in tokens.css", () => {
    const defined = new Set([...tokensCss.matchAll(/--(color-[\w-]+)\s*:/g)].map((m) => m[1]));
    const referenced = new Set<string>();
    for (const value of flattenValues(themeExtend)) {
      for (const m of value.matchAll(/var\(--(color-[\w-]+)\)/g)) referenced.add(m[1]);
    }
    expect(referenced.size).toBeGreaterThan(20);
    expect([...referenced].filter((name) => !defined.has(name))).toEqual([]);
  });
});
