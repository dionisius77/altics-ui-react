import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from "react";
import { cn } from "../lib/cn";
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
};
const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-border",
  destructive: "bg-destructive text-destructive-foreground",
};
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};
export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, fallback, alt, ...props }, ref) => (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm font-medium text-muted-foreground",
        className,
      )}
    >
      {props.src ? (
        <img
          ref={ref}
          alt={alt ?? ""}
          className="h-full w-full object-cover"
          {...props}
        />
      ) : (
        <span aria-label={alt}>{fallback}</span>
      )}
    </span>
  ),
);
Avatar.displayName = "Avatar";
export const Separator = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
));
Separator.displayName = "Separator";
export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "destructive";
};
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 text-sm",
        variant === "destructive"
          ? "border-destructive/50 text-destructive"
          : "border-border text-foreground",
        className,
      )}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";
export const Spinner = ({
  className,
  label = "Loading",
  size = 20,
}: {
  className?: string;
  label?: string;
  /** Diameter in pixels. Set here rather than by class, so a caller's size
   * always wins over the default. */
  size?: number;
}) => (
  <span
    role="status"
    aria-label={label}
    style={{ width: size, height: size }}
    className={cn("relative inline-block", className)}
  >
    {/* Track at 30%, arc solid, both from the current colour: this is how the
        sheets draw a spinner, and it stays tintable by the caller. */}
    <span
      aria-hidden="true"
      className="absolute inset-0 rounded-full border-2 border-current opacity-30"
    />
    <span
      aria-hidden="true"
      className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-current"
    />
  </span>
);
export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={cn("animate-pulse rounded-md bg-muted", className)}
    {...props}
  />
);
