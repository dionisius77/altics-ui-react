// Tailwind preset for @altics/ui consumers (ESM-only).
//
// Usage in the consumer's tailwind.config:
//   export default {
//     content: ["./src/**/*.{ts,tsx}"],
//     presets: [(await import("@altics/ui/tailwind-preset")).default],
//   };
// …or statically: `import preset from "@altics/ui/tailwind-preset"`.
//
// Deliberately omits `content` (docs: it replaces rather than merges,
// so globs always stay owned by the consumer project).
import { plugins, themeExtend } from "./theme/tailwind-theme";

export default {
  theme: {
    extend: themeExtend,
  },
  plugins,
};
