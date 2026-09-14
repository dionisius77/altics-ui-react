import type { SVGProps } from "react";

export type Forklift1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Forklift1Icon({ size = 24, ...props }: Forklift1IconProps) {
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
      <g clipPath="url(#Forklift1Icon-clip0_13426_12021)">
<path d="M11 21H17C17 22.657 15.657 24 14 24C12.343 24 11 22.657 11 21ZM3 24C4.657 24 6 22.657 6 21H0C0 22.657 1.343 24 3 24ZM21 16.5V4C21 3.448 20.552 3 20 3C19.448 3 19 3.448 19 4V14H10.6C9.206 14 7.981 13.072 7.604 11.73C7.483 11.298 7.089 11 6.641 11H0V19H17V18.5L16.503 16H19V16.5C19 17.881 20.119 19 21.5 19H23C23.552 19 24 18.552 24 18C24 17.448 23.552 17 23 17H21.5C21.224 17 21 16.776 21 16.5ZM9.53 11.188C9.665 11.668 10.102 12 10.6 12H15.707L14.252 4.095C13.815 1.722 11.747 0 9.335 0H4.999C2.239 0 0 2.239 0 5V9H6.644C7.988 9 9.168 9.894 9.53 11.188Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="Forklift1Icon-clip0_13426_12021">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

Forklift1Icon.displayName = "Forklift1Icon";
