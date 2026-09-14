import type { SVGProps } from "react";

export type BoxCircleCheckIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function BoxCircleCheckIcon({ size = 24, ...props }: BoxCircleCheckIconProps) {
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
      <g clipPath="url(#BoxCircleCheckIcon-clip0_13426_11875)">
<path d="M20 0H4C1.794 0 0 1.794 0 4V5C0 5.886 0.387 6.684 1 7.234V19C1 21.757 3.243 24 6 24H9C9.552 24 10 23.552 10 23C10 22.448 9.552 22 9 22H6C4.346 22 3 20.654 3 19V8H21V9C21 9.552 21.448 10 22 10C22.552 10 23 9.552 23 9V7.234C23.613 6.684 24 5.887 24 5V4C24 1.794 22.206 0 20 0ZM3 6C2.449 6 2 5.551 2 5V4C2 2.897 2.897 2 4 2H20C21.103 2 22 2.897 22 4V5C22 5.551 21.551 6 21 6H3ZM17 10C13.14 10 10 13.14 10 17C10 20.86 13.14 24 17 24C20.86 24 24 20.86 24 17C24 13.14 20.86 10 17 10ZM17 22C14.243 22 12 19.757 12 17C12 14.243 14.243 12 17 12C19.757 12 22 14.243 22 17C22 19.757 19.757 22 17 22ZM20.221 15.788C20.604 16.186 20.591 16.819 20.192 17.202L17.98 19.326C17.527 19.773 16.928 19.997 16.327 19.997C15.726 19.997 15.123 19.773 14.663 19.323L13.531 18.216C13.136 17.829 13.13 17.196 13.516 16.801C13.904 16.408 14.537 16.401 14.931 16.786L16.063 17.894C16.207 18.037 16.441 18.035 16.585 17.894L18.808 15.76C19.206 15.377 19.839 15.39 20.222 15.789L20.221 15.788Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="BoxCircleCheckIcon-clip0_13426_11875">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

BoxCircleCheckIcon.displayName = "BoxCircleCheckIcon";
