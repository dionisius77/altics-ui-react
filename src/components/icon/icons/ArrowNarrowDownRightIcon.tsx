import type { SVGProps } from "react";

export type ArrowNarrowDownRightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowNarrowDownRightIcon({ size = 24, ...props }: ArrowNarrowDownRightIconProps) {
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
      <path d="M5.29289 5.29302C5.68342 4.90249 6.31643 4.90249 6.70696 5.29302L16.9999 15.586V10C16.9999 9.44776 17.4476 9.00005 17.9999 9.00005C18.5522 9.00005 18.9999 9.44776 18.9999 10V18C18.9999 18.5523 18.5522 19 17.9999 19H9.99992C9.44764 19 8.99992 18.5523 8.99992 18C8.99992 17.4478 9.44764 17 9.99992 17H15.5859L5.29289 6.70708C4.90237 6.31655 4.90237 5.68354 5.29289 5.29302Z" fill="currentColor"/>
    </svg>
  );
}

ArrowNarrowDownRightIcon.displayName = "ArrowNarrowDownRightIcon";
