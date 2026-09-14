import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * LinkButton color type
 * 
 * @typedef {"color" | "gray"} LinkButtonColor
 */
export type LinkButtonColor = "color" | "gray";

/**
 * LinkButton size type
 * 
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl"} LinkButtonSize
 */
export type LinkButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * LinkButton component props
 * 
 * Extends standard HTML button attributes with custom link button-specific props.
 * Renders as a text link with underline on hover.
 */
export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Link color variant
   * @default "gray"
   * @option "color" - Brand secondary color with hover effect
   * @option "gray" - Tertiary/gray color with hover effect
   */
  color?: LinkButtonColor;

  /**
   * Button size
   * @default "md"
   * @option "xs" - Extra small
   * @option "sm" - Small
   * @option "md" - Medium (default)
   * @option "lg" - Large
   * @option "xl" - Extra large
   */
  size?: LinkButtonSize;

  /**
   * Whether the button is in a loading state
   * Shows a spinner icon and disables interaction
   * When true, icons (leadingIcon, trailingIcon) are hidden
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display before the link text
   * Hidden when loading is true
   * Can be an SVG, Image, or any React component
   * @default undefined
   */
  leadingIcon?: ReactNode;

  /**
   * Icon to display after the link text
   * Hidden when loading is true
   * Can be an SVG, Image, or any React component
   * @default undefined
   */
  trailingIcon?: ReactNode;

  /**
   * Link text content
   * Alternative to using children; displays the text in the link
   * @default undefined
   */
  text?: string;

  /**
   * Custom text color
   * When provided, overrides the default color variant
   * Accepts any valid CSS color value (hex, rgb, hsl, named colors, CSS variables, etc.)
   * @default undefined (uses color variant default)
   */
  textColor?: string;
}

/**
 * LinkButton color styles
 * Maps color variants to their corresponding Tailwind class combinations
 */
const colorStyles: Record<LinkButtonColor, string> = {
  color: "text-brand-secondary hover:text-brand-secondary-hover hover:underline",
  gray: "text-tertiary hover:text-tertiary hover:underline",
};

/**
 * LinkButton size styles
 * Maps size names to their corresponding Tailwind class combinations
 */
const sizeStyles: Record<LinkButtonSize, string> = {
  xs: "h-8 px-2.5 py-1.5 text-sm",
  sm: "h-9 px-3 py-2 text-sm",
  md: "h-10 px-[14px] py-2.5 text-sm",
  lg: "h-11 px-4 py-2.5 text-base",
  xl: "h-12 px-[18px] py-3 text-base",
};

/**
 * LinkButton Component
 * 
 * A lightweight link button component styled as text links with underline on hover.
 * Supports two color variants (brand color or gray), multiple sizes, icons, and loading states.
 * 
 * @component
 * 
 * @example
 * // Gray link button (default)
 * <LinkButton text="Help" />
 * 
 * @example
 * // Brand color link button
 * <LinkButton color="color" text="Learn More" />
 * 
 * @example
 * // With icons
 * <LinkButton text="Next" trailingIcon={<IconArrow />} />
 * <LinkButton color="color" text="View" leadingIcon={<IconEye />} />
 * 
 * @example
 * // Different sizes
 * <LinkButton size="sm" text="Small" />
 * <LinkButton size="lg" text="Large" />
 * 
 * @example
 * // Loading state
 * <LinkButton loading text="Loading..." />
 * 
 * @example
 * // Using children as alternative to text prop
 * <LinkButton>Click me</LinkButton>
 */
export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      className,
      color = "gray",
      size = "md",
      loading = false,
      disabled,
      leadingIcon,
      trailingIcon,
      text,
      children,
      type = "button",
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
        ...(textColor && { color: textColor }),
        ...style,
      }}
      className={cn(
        // Base button styles
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150",
        // Focus and accessibility styles
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Disabled state styles
        "disabled:pointer-events-none disabled:opacity-50",
        // Color and size styles
        colorStyles[color],
        sizeStyles[size],
        // Loading state styles (apply hover styles when loading)
        loading && color === "color" && "text-brand-secondary-hover hover:underline",
        loading && color === "gray" && "hover:underline",
        // Custom className override
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

LinkButton.displayName = "LinkButton";
