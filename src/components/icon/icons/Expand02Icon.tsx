import type { SVGProps } from "react";

export type Expand02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Expand02Icon({ size = 24, ...props }: Expand02IconProps) {
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
      <path d="M22 9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41406L5.41406 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3C2.73478 22 2.48051 21.8946 2.29297 21.707C2.10543 21.5195 2 21.2652 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5859L18.5859 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9Z" fill="currentColor"/>
    </svg>
  );
}

Expand02Icon.displayName = "Expand02Icon";
