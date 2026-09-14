import type { SVGProps } from "react";

export type RefreshCw01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function RefreshCw01Icon({ size = 24, ...props }: RefreshCw01IconProps) {
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
      <path d="M1 12C1 6.47715 5.47715 2 11 2C13.7624 2 16.2645 3.12166 18.0732 4.93164C18.7128 5.5716 19.3982 6.3619 20 7.09375V4C20 3.44772 20.4477 3 21 3C21.5523 3 22 3.44772 22 4V10C22 10.5523 21.5523 11 21 11H15C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9H18.9678C18.2756 8.13143 17.4167 7.10277 16.6592 6.34473C15.2102 4.89477 13.2104 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.6457 20 17.7244 17.5604 18.6875 14.2227C18.8407 13.6921 19.3952 13.386 19.9258 13.5391C20.4563 13.6923 20.7625 14.2468 20.6094 14.7773C19.4058 18.9482 15.5605 22 11 22C5.47715 22 1 17.5228 1 12Z" fill="currentColor"/>
    </svg>
  );
}

RefreshCw01Icon.displayName = "RefreshCw01Icon";
