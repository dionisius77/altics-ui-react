// Bundles the Tailwind preset to self-contained ESM in dist/ so the
// published package exposes "./tailwind-preset". Run as part of build.
import { build } from "esbuild";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

await build({
  entryPoints: [join(root, "tailwind.preset.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: join(root, "dist", "tailwind-preset.js"),
  logLevel: "warning",
});

writeFileSync(
  join(root, "dist", "tailwind-preset.d.ts"),
  "declare const preset: { theme: object; plugins: unknown[] };\nexport default preset;\n",
);

console.log("Preset bundled → dist/tailwind-preset.js");
