import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          foreground: "hsl(var(--color-secondary-foreground) / <alpha-value>)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          950: "var(--color-secondary-950)",
        },
        success: {
          primary: "var(--color-text-success-primary)",
          light: "var(--color-bg-success-light)",
        },
        warning: {
          primary: "var(--color-text-warning-primary)",
          light: "var(--color-bg-warning-light)",
        },
        error: {
          primary: "var(--color-text-error-primary)",
          light: "var(--color-bg-error-light)",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
          foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--color-border) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",
        ring: {
          DEFAULT: "hsl(var(--color-focus-ring) / <alpha-value>)",
          error: "hsl(var(--color-focus-ring-error) / <alpha-value>)",
        },
        placeholder: "--color-placeholder / <alpha-value>)",
        destructive: {
          DEFAULT: "hsl(var(--color-destructive) / <alpha-value>)",
          foreground:
            "hsl(var(--color-destructive-foreground) / <alpha-value>)",
        },
      },
      textColor: {
        // Brand text colors
        "brand-primary": "var(--color-text-brand-primary)",
        "brand-secondary": "var(--color-text-brand-secondary)",
        "brand-secondary-hover": "var(--color-text-brand-secondary-hover)",
        "brand-tertiary": "var(--color-text-brand-tertiary)",
        "brand-tertiary-alt": "var(--color-text-brand-tertiary-alt)",

        // Semantic text colors
        "error": "var(--color-text-error-primary)",
        "warning": "var(--color-text-warning-primary)",
        "success": "var(--color-text-success-primary)",

        // General text colors
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        quaternary: "var(--color-text-quaternary)",
        disabled: "var(--color-text-disabled)",
        white: "var(--color-text-white)",
        inverse: "var(--color-text-inverse)",
        link: "var(--color-text-link)",
        "link-hover": "var(--color-text-link-hover)",
        placeholder: "var(--color-placeholder)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.shadow-xs': {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.shadow-sm': {
          boxShadow: '0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        },
        '.shadow-md': {
          boxShadow: '0 2px 4px -2px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.10)',
        },
        '.shadow-lg': {
          boxShadow: '0 2px 2px -1px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.03), 0 12px 16px -4px rgba(0, 0, 0, 0.08)',
        },
        '.shadow-xl': {
          boxShadow: '0 3px 3px -1.5px rgba(0, 0, 0, 0.04), 0 8px 8px -4px rgba(0, 0, 0, 0.03), 0 20px 24px -4px rgba(0, 0, 0, 0.08)',
        },
        '.radius-xxs': {
          borderRadius: '2px',
        },
        '.radius-xs': {
          borderRadius: '4px',
        },
        '.radius-sm': {
          borderRadius: '6px',
        },
        '.radius-md': {
          borderRadius: '8px',
        },
        '.radius-lg': {
          borderRadius: '10px',
        },
        '.radius-xl': {
          borderRadius: '12px',
        },
        '.radius-2xl': {
          borderRadius: '16px',
        },
        '.radius-3xl': {
          borderRadius: '20px',
        },
        '.radius-4xl': {
          borderRadius: '24px',
        },
        '.radius-full': {
          borderRadius: '9999px',
        },
        '.backdrop-blur-sm': {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        },
        '.backdrop-blur-md': {
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        },
        '.backdrop-blur-lg': {
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        },
        '.backdrop-blur-xl': {
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        },


      })
    })
  ],
} satisfies Config;
