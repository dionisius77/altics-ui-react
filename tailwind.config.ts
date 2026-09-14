import type { Config as TailwindConfig } from "tailwindcss";
import { plugins, themeExtend } from "./theme/tailwind-theme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: themeExtend,
  },
  plugins,
} satisfies TailwindConfig;
