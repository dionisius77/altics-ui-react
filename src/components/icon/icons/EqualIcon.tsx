import type { SVGProps } from "react";

export type EqualIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function EqualIcon({ size = 24, ...props }: EqualIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M19 14C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H19ZM19 8C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H19Z" fill="currentColor"/>
    </svg>
  );
}

EqualIcon.displayName = "EqualIcon";
