import type { SVGProps } from "react";

export type TruckTowIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function TruckTowIcon({ size = 24, ...props }: TruckTowIconProps) {
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
      <g clipPath="url(#TruckTowIcon-clip0_13426_11896)">
<path d="M19 6H17C15.897 6 15 6.897 15 8V12H13.968L4.268 0.36C4.078 0.132 3.797 0 3.5 0H3C2.448 0 2 0.448 2 1V6.5C2 6.776 1.776 7 1.5 7H1C0.448 7 0 7.448 0 8C0 8.552 0.448 9 1 9H1.5C2.878 9 4 7.878 4 6.5V3.162L11.365 12H3C1.346 12 0 13.346 0 15V17C0 18.654 1.346 20 3 20H3.037C3.013 20.165 3 20.331 3 20.5C3 22.43 4.57 24 6.5 24C8.43 24 10 22.43 10 20.5C10 20.331 9.987 20.165 9.963 20H14.037C14.013 20.165 14 20.331 14 20.5C14 22.43 15.57 24 17.5 24C19.43 24 21 22.43 21 20.5C21 20.293 20.981 20.088 20.945 19.887C22.696 19.461 24 17.88 24 16V11C24 8.243 21.757 6 19 6ZM19 8C20.654 8 22 9.346 22 11V12H17V8H19ZM2 17V15C2 14.449 2.449 14 3 14H15V18H8.493C8.488 18 8.483 18 8.477 18H4.529C4.519 18 4.508 18 4.498 18H3C2.449 18 2 17.551 2 17ZM8 20.5C8 21.327 7.327 22 6.5 22C5.673 22 5 21.327 5 20.5C5 20.311 5.037 20.144 5.091 20H7.91C7.964 20.144 8.001 20.311 8.001 20.5H8ZM17.5 22C16.673 22 16 21.327 16 20.5C16 20.311 16.037 20.144 16.091 20H18.91C18.964 20.144 19.001 20.311 19.001 20.5C19.001 21.327 18.327 22 17.5 22ZM20 18H19.493C19.488 18 19.483 18 19.477 18H17V14H22V16C22 17.103 21.103 18 20 18Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="TruckTowIcon-clip0_13426_11896">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

TruckTowIcon.displayName = "TruckTowIcon";
