import type { SVGProps } from "react";

export type MinusIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function MinusIcon({ size = 24, ...props }: MinusIconProps) {
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
      <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19Z" fill="currentColor"/>
    </svg>
  );
}

MinusIcon.displayName = "MinusIcon";
