import type { SVGProps } from "react";

export type DollyFlatbedIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function DollyFlatbedIcon({ size = 24, ...props }: DollyFlatbedIconProps) {
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
      <g clipPath="url(#DollyFlatbedIcon-clip0_13426_11867)">
<path d="M23 18H8C6.346 18 5 16.654 5 15V4C5 1.794 3.206 0 1 0C0.447 0 0 0.448 0 1C0 1.552 0.447 2 1 2C2.103 2 3 2.897 3 4V15C3 17.046 4.236 18.809 6 19.582V20.5C6 22.43 7.57 24 9.5 24C11.43 24 13 22.43 13 20.5V20H16V20.5C16 22.43 17.57 24 19.5 24C21.43 24 23 22.43 23 20.5V20C23.553 20 24 19.553 24 19C24 18.447 23.553 18 23 18ZM11 20.5C11 21.327 10.327 22 9.5 22C8.673 22 8 21.327 8 20.5V20H11V20.5ZM21 20.5C21 21.327 20.327 22 19.5 22C18.673 22 18 21.327 18 20.5V20H21V20.5ZM11 16H19C21.206 16 23 14.206 23 12V7C23 4.794 21.206 3 19 3H11C8.794 3 7 4.794 7 7V12C7 14.206 8.794 16 11 16ZM14 5H16V8H14V5ZM9 7C9 5.897 9.897 5 11 5H12V8C12 9.103 12.897 10 14 10H16C17.103 10 18 9.103 18 8V5H19C20.103 5 21 5.897 21 7V12C21 13.103 20.103 14 19 14H11C9.897 14 9 13.103 9 12V7Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="DollyFlatbedIcon-clip0_13426_11867">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

DollyFlatbedIcon.displayName = "DollyFlatbedIcon";
