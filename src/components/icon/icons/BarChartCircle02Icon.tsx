import type { SVGProps } from "react";

export type BarChartCircle02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function BarChartCircle02Icon({ size = 24, ...props }: BarChartCircle02IconProps) {
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
      <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM7 17V15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17ZM11 17V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17ZM15 17V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

BarChartCircle02Icon.displayName = "BarChartCircle02Icon";
