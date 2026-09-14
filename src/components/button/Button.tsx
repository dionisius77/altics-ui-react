import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * Button variant type
 * 
 * @typedef {"primary" | "secondary" | "tertiary"} ButtonVariant
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary";

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

  /**
   * Button text content
   * Alternative to using children; displays the text in the button
   * @default undefined
   */
  text?: string;

  /**
   * Custom background color
   * When provided, overrides the default variant background color
   * Accepts any valid CSS color value
   * @default undefined (uses variant default)
   */
  backgroundColor?: string;

  /**
   * Custom text color
   * When provided, overrides the default variant text color
   * Accepts any valid CSS color value
   * @default undefined (uses variant default)
   */
  textColor?: string;
}

/**
 * Button variant styles
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white hover:bg-brand-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1.5px_rgba(0,0,0,0.18)_inset,0px_1.5px_0px_0px_rgba(255,255,255,0.12)_inset] active:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.18)_inset,0px_2px_3px_0px_rgba(0,0,0,0.2)_inset]",
  secondary: "border border-neutral-300 hover:bg-neutral-50 text-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1px_rgba(0,0,0,0.18)_inset]",
  tertiary: "text-tertiary hover:bg-neutral-50",
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
 * // Primary button (default) using text prop
 * <Button text="Click me" />
 * 
 * @example
 * // With icons and text prop
 * <Button text="Save" leadingIcon={<IconCheck />} />
 * <Button text="Next" trailingIcon={<IconArrow />} />
 * 
 * @example
 * // Different variants and sizes
 * <Button variant="primary" size="lg" text="Large Primary" />
 * <Button variant="secondary" size="md" text="Medium Secondary" />
 * <Button variant="tertiary" size="sm" text="Small Tertiary" />
 * <Button variant="link-color" text="Link Color" />
 * 
 * @example
 * // Loading state (icons are hidden)
 * <Button loading text="Processing..." leadingIcon={<IconCheck />} />
 * 
 * @example
 * // With custom className
 * <Button text="Custom" className="custom-class" />
 * 
 * @example
 * // Using children as alternative to text prop
 * <Button>Click me</Button>
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
      text,
      children,
      type = "button",
      backgroundColor,
      textColor,
      style,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      style={{
        ...(backgroundColor && { backgroundColor }),
        ...(textColor && { color: textColor }),
        ...style,
      }}
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
      {text || children}
      {!loading && trailingIcon && (
        <span className="flex items-center justify-center">{trailingIcon}</span>
      )}
    </button>
  ),
);

Button.displayName = "Button";
