import type { SVGProps } from "react";

export type RefreshCcw01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function RefreshCcw01Icon({ size = 24, ...props }: RefreshCcw01IconProps) {
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
      <path d="M20 12C20 7.58172 16.4183 4 12 4C9.78959 4 7.78979 4.89477 6.34082 6.34473C5.5833 7.10277 4.72436 8.13143 4.03223 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H2C1.44772 11 1 10.5523 1 10V4C1 3.44772 1.44772 3 2 3C2.55228 3 3 3.44772 3 4V7.09375C3.6018 6.3619 4.28724 5.5716 4.92676 4.93164C6.7355 3.12166 9.23761 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.43955 22 3.59417 18.9482 2.39062 14.7773C2.23753 14.2468 2.54373 13.6923 3.07422 13.5391C3.60482 13.386 4.15934 13.6921 4.3125 14.2227C5.27565 17.5604 8.35426 20 12 20C16.4183 20 20 16.4183 20 12Z" fill="currentColor"/>
    </svg>
  );
}

RefreshCcw01Icon.displayName = "RefreshCcw01Icon";
