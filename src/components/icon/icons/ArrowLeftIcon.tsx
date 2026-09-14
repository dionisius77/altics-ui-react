import type { SVGProps } from "react";

export type ArrowLeftIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowLeftIcon({ size = 24, ...props }: ArrowLeftIconProps) {
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
      <path d="M11.2929 4.29302C11.6834 3.90249 12.3164 3.90249 12.707 4.29302C13.0975 4.68354 13.0975 5.31655 12.707 5.70708L7.41399 11H18.9999C19.5522 11 19.9999 11.4478 19.9999 12C19.9999 12.5523 19.5522 13 18.9999 13H7.41399L12.707 18.293C13.0975 18.6835 13.0975 19.3166 12.707 19.7071C12.3164 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6835 4.29289 11.293L11.2929 4.29302Z" fill="currentColor"/>
    </svg>
  );
}

ArrowLeftIcon.displayName = "ArrowLeftIcon";
