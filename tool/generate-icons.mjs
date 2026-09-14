import { readdirSync, readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, basename } from "node:path";

const ICONS_DIR = "src/assets/icons";
const OUT_DIR = "src/components/icon/icons";

function toPascalCase(fileName) {
  const base = basename(fileName, ".svg");
  const parts = base.split("-").filter(Boolean);
  let name = parts
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
  if (!name) name = "Icon";
  if (/^[0-9]/.test(name)) name = `Icon${name}`;
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
    name = name.replace(/[^A-Za-z0-9_$]/g, "");
  }
  return name;
}

function toComponentName(fileName) {
  const pascal = toPascalCase(fileName);
  return pascal.endsWith("Icon") ? pascal : `${pascal}Icon`;
}

// clip-path="..." -> clipPath="...", stroke-width -> strokeWidth, etc.
function jsxAttrs(svgInner) {
  return svgInner
    .replace(/clip-path=/g, "clipPath=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-dasharray=/g, "strokeDasharray=")
    .replace(/stop-color=/g, "stopColor=");
}

function extractRootAttrs(svg) {
  const viewBox = /viewBox="([^"]*)"/.exec(svg)?.[1] ?? "0 0 24 24";
  return { viewBox };
}

function extractInner(svg, componentName) {
  // Strip outer <svg ...> and </svg>
  let inner = svg
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();
  inner = jsxAttrs(inner);
  // Namespace clip ids per icon to avoid collisions on pages with many icons.
  const idMap = new Map();
  inner = inner.replace(/\bid="([^"]+)"/g, (m, id) => {
    const namespaced = `${componentName}-${id}`;
    idMap.set(id, namespaced);
    return `id="${namespaced}"`;
  });
  for (const [oldId, newId] of idMap) {
    inner = inner.split(`url(#${oldId})`).join(`url(#${newId})`);
  }
  return inner;
}

function componentSource(componentName, viewBox, inner) {
  return `import type { SVGProps } from "react";

export type ${componentName}Props = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ${componentName}({ size = 24, ...props }: ${componentName}Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      ${inner}
    </svg>
  );
}

${componentName}.displayName = "${componentName}";
`;
}

function main() {
  const files = readdirSync(ICONS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".svg"))
    .sort();
  if (files.length === 0) {
    console.error(`No SVGs found in ${ICONS_DIR}`);
    process.exit(1);
  }
  mkdirSync(OUT_DIR, { recursive: true });

  // Only write when content changed: keeps mtimes stable so Vite/tsc
  // caches survive no-op runs. mtime comparison alone is fragile
  // across git checkouts, so compare file content instead.
  function writeIfChanged(path, content) {
    let existing = null;
    try {
      existing = readFileSync(path, "utf8");
    } catch {
      existing = null;
    }
    if (existing === content) return false;
    writeFileSync(path, content);
    return true;
  }

  const seen = new Map();
  const components = [];
  let written = 0;
  let skipped = 0;

  for (const file of files) {
    const raw = readFileSync(join(ICONS_DIR, file), "utf8");
    let componentName = toComponentName(file);
    // Dedupe (e.g. box.svg vs box-1.svg edge cases)
    let n = 1;
    while (seen.has(componentName)) {
      n += 1;
      componentName = `${toComponentName(file)}${n}`;
    }
    seen.set(componentName, file);
    const { viewBox } = extractRootAttrs(raw);
    const inner = extractInner(raw, componentName);
    if (
      writeIfChanged(
        join(OUT_DIR, `${componentName}.tsx`),
        componentSource(componentName, viewBox, inner),
      )
    ) {
      written += 1;
    } else {
      skipped += 1;
    }
    components.push(componentName);
  }

  // Remove orphans from deleted/renamed SVGs so stale exports do not linger.
  const wanted = new Set(components.map((c) => `${c}.tsx`));
  let removed = 0;
  for (const entry of readdirSync(OUT_DIR)) {
    if (!entry.endsWith(".tsx")) continue;
    if (!wanted.has(entry)) {
      rmSync(join(OUT_DIR, entry));
      removed += 1;
    }
  }

  const barrel = components
    .map((c) => `export { ${c}, type ${c}Props } from "./${c}";`)
    .join("\n");
  if (
    writeIfChanged(
      join(OUT_DIR, "index.ts"),
      `// GENERATED CODE - DO NOT MODIFY BY HAND.\n// Run: npm run generate:icons\n${barrel}\n`,
    )
  ) {
    written += 1;
  } else {
    skipped += 1;
  }
  console.log(
    `Icons: ${components.length} total, ${written} written, ${skipped} unchanged, ${removed} removed → ${OUT_DIR}/`,
  );
}

main();
