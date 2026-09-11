import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};
const variants = {
  primary: "bg-primary-900 text-white hover:bg-brand-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1.5px_rgba(0,0,0,0.18)_inset,0px_1.5px_0px_0px_rgba(255,255,255,0.12)_inset] active:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.18)_inset,0px_2px_3px_0px_rgba(0,0,0,0.2)_inset]",
  secondary: "border border-neutral-300 text-secondary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_-2px_0px_0px_rgba(0,0,0,0.05)_inset,0px_0px_0px_1px_rgba(0,0,0,0.18)_inset]",
  outline: "border border-input bg-background hover:bg-muted",
  ghost: "hover:bg-muted",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};
const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </button>
  ),
);
Button.displayName = "Button";
