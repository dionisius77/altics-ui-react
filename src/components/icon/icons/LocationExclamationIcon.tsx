import type { SVGProps } from "react";

export type LocationExclamationIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function LocationExclamationIcon({ size = 24, ...props }: LocationExclamationIconProps) {
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
      <g clipPath="url(#LocationExclamationIcon-clip0_13426_11912)">
<path d="M19.777 3.222C17.7 1.145 14.937 0 12 0C9.06305 0 6.30005 1.145 4.22205 3.222C-0.0669525 7.511 -0.0669525 14.489 4.25005 18.806L8.19205 22.448C9.21605 23.449 10.569 24.001 12 24.001C13.431 24.001 14.783 23.449 15.786 22.468L19.777 18.78C24.066 14.491 24.066 7.512 19.777 3.223V3.222ZM18.391 17.337L14.408 21.018C13.113 22.286 10.908 22.305 9.57005 20.998L5.63505 17.364C2.12605 13.854 2.12605 8.145 5.63505 4.635C7.33505 2.936 9.59605 1.999 11.999 1.999C14.402 1.999 16.662 2.936 18.362 4.635C21.871 8.145 21.871 13.854 18.39 17.336L18.391 17.337ZM10.999 11.5V6C10.999 5.447 11.446 5 11.999 5C12.552 5 12.999 5.447 12.999 6V11.5C12.999 12.053 12.552 12.5 11.999 12.5C11.446 12.5 10.999 12.053 10.999 11.5ZM13.499 15.5C13.499 16.328 12.827 17 11.999 17C11.171 17 10.499 16.328 10.499 15.5C10.499 14.672 11.171 14 11.999 14C12.827 14 13.499 14.672 13.499 15.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="LocationExclamationIcon-clip0_13426_11912">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

LocationExclamationIcon.displayName = "LocationExclamationIcon";
