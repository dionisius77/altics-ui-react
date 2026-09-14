import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
export default [
  { ignores: ["dist", "node_modules", "postcss.config.cjs", "scratchpad"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.{ts,tsx}"], languageOptions: { globals: { ...globals.browser } }, rules: { "@typescript-eslint/no-unused-vars": "off" } },
  { files: ["tool/**/*.mjs"], languageOptions: { globals: { ...globals.node } } },
];
