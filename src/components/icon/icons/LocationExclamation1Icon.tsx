import type { SVGProps } from "react";

export type LocationExclamation1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function LocationExclamation1Icon({ size = 24, ...props }: LocationExclamation1IconProps) {
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
      <g clipPath="url(#LocationExclamation1Icon-clip0_13426_12056)">
<path d="M19.777 3.222C17.7 1.145 14.937 0 12 0C9.06305 0 6.30005 1.145 4.22205 3.222C-0.0669525 7.511 -0.0669525 14.489 4.25005 18.806L8.19205 22.448C9.21605 23.449 10.569 24.001 12 24.001C13.431 24.001 14.783 23.449 15.786 22.468L19.777 18.78C24.066 14.491 24.066 7.512 19.777 3.223V3.222ZM11 6C11 5.447 11.447 5 12 5C12.553 5 13 5.447 13 6V11.5C13 12.053 12.553 12.5 12 12.5C11.447 12.5 11 12.053 11 11.5V6ZM12 17C11.172 17 10.5 16.328 10.5 15.5C10.5 14.672 11.172 14 12 14C12.828 14 13.5 14.672 13.5 15.5C13.5 16.328 12.828 17 12 17Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="LocationExclamation1Icon-clip0_13426_12056">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

LocationExclamation1Icon.displayName = "LocationExclamation1Icon";
