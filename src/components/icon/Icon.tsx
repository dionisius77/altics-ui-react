import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  size?: number;
  children: ReactNode;
};

/** Layout wrapper to align an icon SVG with text. Prefer direct `<XxxIcon size />` usage. */
export function Icon({ size = 24, className, style, children, ...rest }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}

Icon.displayName = "Icon";
