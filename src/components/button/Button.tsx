import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * Button variant type
 * 
 * @typedef {"primary" | "secondary" | "tertiary" | "link-color" | "link-gray"} ButtonVariant
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link-color" | "link-gray";

/**
 * Button size type
 * 
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl"} ButtonSize
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Button component props
 * 
 * Extends standard HTML button attributes with custom button-specific props
 * for styling and behavior customization.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default "primary"
   * @option "primary" - Solid brand color with shadow, primary action
   * @option "secondary" - Bordered style with shadow, secondary action
   * @option "tertiary" - Text-only, minimal style
   * @option "link-color" - Link styled in brand secondary color
   * @option "link-gray" - Link styled in gray/tertiary color
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default "md"
   * @option "xs" - 32px height, compact
   * @option "sm" - 36px height, small
   * @option "md" - 40px height, medium (default)
   * @option "lg" - 44px height, large
   * @option "xl" - 48px height, extra large
   */
  size?: ButtonSize;

  /**
   * Whether the button is in a loading state
   * Shows a spinner icon and disables interaction
   * When true, icons (leadingIcon, trailingIcon) are hidden
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display before the button text
   * Hidden when loading is true
   * Can be an SVG, Image, or any React component
   * @default undefined
   */
  leadingIcon?: ReactNode;

  /**
   * Icon to display after the button text
   * Hidden when loading is true
   * Can be an SVG, Image, or any React component
   * @default undefined
   */
  trailingIcon?: ReactNode;
}

/**
 * Button variant styles
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-900 text-white hover:bg-brand-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1.5px_rgba(0,0,0,0.18)_inset,0px_1.5px_0px_0px_rgba(255,255,255,0.12)_inset] active:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.18)_inset,0px_2px_3px_0px_rgba(0,0,0,0.2)_inset]",
  secondary: "border border-neutral-300 hover:bg-neutral-50 text-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1px_rgba(0,0,0,0.18)_inset]",
  tertiary: "text-tertiary hover:bg-neutral-50",
  "link-color": "text-brand-secondary hover:text-brand-secondary-hover",
  "link-gray": "text-tertiary hover:text-tertiary",
};

/**
 * Button size styles
 * Defines height, padding, and font size for each size variant
 */
const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-8 px-2.5 py-1.5 text-sm",
  sm: "h-9 px-3 py-2 text-sm",
  md: "h-10 px-[14px] py-2.5 text-sm",
  lg: "h-11 px-4 py-2.5 text-base",
  xl: "h-12 px-[18px] py-3 text-base",
};
/**
 * Button Component
 * 
 * A flexible, accessible button component with multiple variants, sizes, and states.
 * Supports loading states with animated spinner, leading/trailing icons, and full accessibility features.
 * 
 * @component
 * 
 * @example
 * // Primary button (default)
 * <Button>Click me</Button>
 * 
 * @example
 * // With icons
 * <Button leadingIcon={<IconCheck />}>Save</Button>
 * <Button trailingIcon={<IconArrow />}>Next</Button>
 * 
 * @example
 * // Different variants and sizes
 * <Button variant="primary" size="lg">Large Primary</Button>
 * <Button variant="secondary" size="md">Medium Secondary</Button>
 * <Button variant="tertiary" size="sm">Small Tertiary</Button>
 * <Button variant="link-color">Link Color</Button>
 * 
 * @example
 * // Loading state (icons are hidden)
 * <Button loading leadingIcon={<IconCheck />}>Processing...</Button>
 * 
 * @example
 * // With custom className
 * <Button className="custom-class">Custom</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      leadingIcon,
      trailingIcon,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={cn(
        // Base button styles
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        loading && variant === "primary" && "bg-brand-secondary",
        loading && variant === "secondary" && "bg-neutral-50",
        loading && variant === "tertiary" && "bg-neutral-50",
        className,
      )}
      {...props}
    >
      {!loading && leadingIcon && (
        <span className="flex items-center justify-center">{leadingIcon}</span>
      )}
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
      {!loading && trailingIcon && (
        <span className="flex items-center justify-center">{trailingIcon}</span>
      )}
    </button>
  ),
);

Button.displayName = "Button";
