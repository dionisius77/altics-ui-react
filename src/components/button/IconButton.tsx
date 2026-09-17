import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * IconButton variant type (same as Button)
 * 
 * @typedef {"primary" | "secondary" | "tertiary" | "link-color" | "link-gray"} IconButtonVariant
 */
export type IconButtonVariant = "primary" | "secondary" | "tertiary" | "link-color" | "link-gray";

/**
 * IconButton size type
 * 
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl"} IconButtonSize
 */
export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * IconButton component props
 * 
 * Extends standard HTML button attributes with custom icon button-specific props.
 * IconButton only displays an icon, no text content.
 */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default "primary"
   * @option "primary" - Solid brand color with shadow, primary action
   * @option "secondary" - Bordered style with shadow, secondary action
   * @option "tertiary" - Text-only, minimal style
   * @option "link-color" - Link styled in brand secondary color
   * @option "link-gray" - Link styled in gray/tertiary color
   */
  variant?: IconButtonVariant;

  /**
   * Button size - determines both the button dimensions and icon size
   * @default "md"
   * @option "xs" - 32px button, 16px icon
   * @option "sm" - 36px button, 20px icon
   * @option "md" - 40px button, 20px icon
   * @option "lg" - 44px button, 24px icon
   * @option "xl" - 48px button, 28px icon
   */
  size?: IconButtonSize;

  /**
   * Whether the button is in a loading state
   * Shows a spinner icon and disables interaction
   * @default false
   */
  loading?: boolean;

  /**
   * The icon to display
   * Can be an SVG, Image, or any React component
   * This is the primary content of the icon button
   */
  icon: ReactNode;

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
 * IconButton variant styles (same as Button)
 * Maps variant names to their corresponding Tailwind class combinations
 */
const variantStyles: Record<IconButtonVariant, string> = {
  primary: "bg-primary-900 text-white hover:bg-primary-950 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1.5px_rgba(0,0,0,0.18)_inset,0px_1.5px_0px_0px_rgba(255,255,255,0.12)_inset] active:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.18)_inset,0px_2px_3px_0px_rgba(0,0,0,0.2)_inset]",
  secondary: "border border-neutral-300 hover:bg-neutral-50 text-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1px_rgba(0,0,0,0.18)_inset]",
  tertiary: "text-tertiary hover:bg-neutral-50",
  "link-color": "text-brand-secondary hover:text-brand-secondary-hover",
  "link-gray": "text-tertiary hover:text-tertiary",
};

/**
 * IconButton size styles
 * Maps size names to their corresponding dimensions (square buttons)
 * Icon sizes are appropriate for each button size
 */
const sizeStyles: Record<IconButtonSize, { button: string; icon: string }> = {
  xs: { button: "h-8 w-8", icon: "size-4" },      // 32px button, 16px icon
  sm: { button: "h-9 w-9", icon: "size-5" },      // 36px button, 20px icon
  md: { button: "h-10 w-10", icon: "size-5" },    // 40px button, 20px icon
  lg: { button: "h-11 w-11", icon: "size-6" },    // 44px button, 24px icon
  xl: { button: "h-12 w-12", icon: "size-7" },    // 48px button, 28px icon
};

/**
 * IconButton Component
 * 
 * A compact, accessible icon-only button component with multiple variants and sizes.
 * Useful for toolbar buttons, action buttons, and other icon-only UI elements.
 * Supports loading states with animated spinner and full accessibility features.
 * 
 * @component
 * 
 * @example
 * // Primary icon button (default)
 * <IconButton icon={<IconTrash />} />
 * 
 * @example
 * // Different variants and sizes
 * <IconButton variant="primary" size="lg" icon={<IconPlus />} />
 * <IconButton variant="secondary" size="md" icon={<IconEdit />} />
 * <IconButton variant="tertiary" size="sm" icon={<IconX />} />
 * 
 * @example
 * // Loading state
 * <IconButton loading icon={<IconCheck />} />
 * 
 * @example
 * // With custom className and aria-label for accessibility
 * <IconButton 
 *   icon={<IconMenu />} 
 *   aria-label="Open menu"
 *   className="custom-class"
 * />
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      icon,
      type = "button",
      backgroundColor,
      textColor,
      style,
      ...props
    },
    ref,
  ) => {
    const { button: buttonSize, icon: iconSize } = sizeStyles[size];

    return (
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
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150",
          // Focus and accessibility styles
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          // Disabled state styles
          "disabled:pointer-events-none disabled:opacity-50",
          // Size styles (square dimensions)
          buttonSize,
          // Variant styles
          variantStyles[variant],
          // Loading state styles (apply hover styles when loading)
          loading && variant === "primary" && "bg-primary-950",
          loading && variant === "secondary" && "bg-neutral-50",
          loading && variant === "tertiary" && "bg-neutral-50",
          // Custom className override
          className,
        )}
        {...props}
      >
        {loading ? (
          <span
            aria-hidden="true"
            className={cn("animate-spin rounded-full border-2 border-current border-t-transparent", iconSize)}
          />
        ) : (
          <span className="flex items-center justify-center">{icon}</span>
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
