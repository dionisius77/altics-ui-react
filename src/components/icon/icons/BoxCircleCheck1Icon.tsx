import type { SVGProps } from "react";

export type BoxCircleCheck1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function BoxCircleCheck1Icon({ size = 24, ...props }: BoxCircleCheck1IconProps) {
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
      <g clipPath="url(#BoxCircleCheck1Icon-clip0_13426_12019)">
<path d="M18 12C14.686 12 12 14.686 12 18C12 21.314 14.686 24 18 24C21.314 24 24 21.314 24 18C24 14.686 21.314 12 18 12ZM21.683 17.712L18.98 20.326C18.528 20.772 17.928 20.997 17.327 20.997C16.726 20.997 16.124 20.772 15.664 20.323L14.31 18.991C13.915 18.604 13.91 17.971 14.296 17.577C14.682 17.182 15.315 17.176 15.71 17.563L17.063 18.894C17.207 19.036 17.443 19.033 17.585 18.892L20.298 16.268C20.695 15.887 21.329 15.898 21.712 16.297C22.094 16.695 22.081 17.329 21.683 17.712ZM12.715 24H6C3.24 23.997 1.003 21.76 1 19V11C1 10.448 1.448 10 2 10H17.995C13.586 10.003 10 13.59 10 18C10 20.387 11.051 22.533 12.715 24ZM3 8C1.344 8 0 6.657 0 5C0 2.238 2.238 0 5 0C5 0 19.145 0.002 19.218 0.005C21.98 0.125 24.121 2.461 24 5.223C23.898 6.798 22.58 8.019 21 8H3Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="BoxCircleCheck1Icon-clip0_13426_12019">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

BoxCircleCheck1Icon.displayName = "BoxCircleCheck1Icon";
