import type { SVGProps } from "react";

export type LocationPinTrainIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function LocationPinTrainIcon({ size = 24, ...props }: LocationPinTrainIconProps) {
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
      <g clipPath="url(#LocationPinTrainIcon-clip0_13426_11928)">
<path d="M13 5H11C8.79405 5 7.00005 6.794 7.00005 9V12C7.00005 13.165 7.67405 14.166 8.64705 14.662L8.14805 15.477C7.85905 15.949 8.00705 16.564 8.47805 16.852C8.94205 17.138 9.56305 16.997 9.85305 16.522L10.785 15H13.216L14.148 16.522C14.438 16.997 15.059 17.138 15.523 16.852C15.994 16.564 16.142 15.949 15.853 15.477L15.354 14.662C16.326 14.165 17.001 13.165 17.001 12V9C17.001 6.794 15.207 5 13.001 5H13ZM11 7H13C14.103 7 15 7.897 15 9V11H9.00005V9C9.00005 7.897 9.89705 7 11 7ZM19.777 3.222C17.7 1.145 14.938 0 12 0C9.06205 0 6.30005 1.145 4.22205 3.222C-0.0669525 7.511 -0.0669525 14.489 4.25005 18.806L8.19205 22.448C9.21605 23.449 10.569 24.001 12 24.001C13.431 24.001 14.783 23.449 15.786 22.468L19.777 18.78C24.066 14.491 24.066 7.512 19.777 3.223V3.222ZM18.391 17.337L14.408 21.018C13.113 22.286 10.908 22.305 9.57005 20.998L5.63505 17.364C2.12605 13.854 2.12605 8.145 5.63505 4.635C7.33505 2.936 9.59605 1.999 11.999 1.999C14.402 1.999 16.662 2.936 18.362 4.635C21.871 8.145 21.871 13.854 18.39 17.336L18.391 17.337Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="LocationPinTrainIcon-clip0_13426_11928">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

LocationPinTrainIcon.displayName = "LocationPinTrainIcon";
