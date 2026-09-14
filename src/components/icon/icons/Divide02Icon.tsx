import type { SVGProps } from "react";

export type Divide02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Divide02Icon({ size = 24, ...props }: Divide02IconProps) {
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
      <path d="M13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18ZM20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6ZM15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18ZM15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" fill="currentColor"/>
    </svg>
  );
}

Divide02Icon.displayName = "Divide02Icon";
