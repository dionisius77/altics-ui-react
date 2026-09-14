import type { SVGProps } from "react";

export type ArrowNarrowLeftIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowNarrowLeftIcon({ size = 24, ...props }: ArrowNarrowLeftIconProps) {
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
      <path d="M9.29289 5.29302C9.68342 4.90249 10.3164 4.90249 10.707 5.29302C11.0975 5.68354 11.0975 6.31655 10.707 6.70708L6.41399 11H19.9999C20.5522 11 20.9999 11.4478 20.9999 12C20.9999 12.5523 20.5522 13 19.9999 13H6.41399L10.707 17.293C11.0975 17.6835 11.0975 18.3166 10.707 18.7071C10.3164 19.0976 9.68342 19.0976 9.29289 18.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6835 3.29289 11.293L9.29289 5.29302Z" fill="currentColor"/>
    </svg>
  );
}

ArrowNarrowLeftIcon.displayName = "ArrowNarrowLeftIcon";
