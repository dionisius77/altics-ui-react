import type { SVGProps } from "react";

export type ReverseRightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ReverseRightIcon({ size = 24, ...props }: ReverseRightIconProps) {
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
      <path d="M3 13C3 9.13405 6.13401 6.00005 10 6.00005H17.5859L15.293 3.70708C14.9024 3.31655 14.9024 2.68354 15.293 2.29302C15.6835 1.90249 16.3165 1.90249 16.707 2.29302L20.707 6.29302C21.0976 6.68354 21.0976 7.31655 20.707 7.70708L16.707 11.7071C16.3165 12.0976 15.6835 12.0976 15.293 11.7071C14.9024 11.3166 14.9024 10.6835 15.293 10.293L17.5859 8.00005H10C7.23858 8.00005 5 10.2386 5 13C5 15.7615 7.23858 18 10 18H20C20.5523 18 21 18.4478 21 19C21 19.5523 20.5523 20 20 20H10C6.13401 20 3 16.866 3 13Z" fill="currentColor"/>
    </svg>
  );
}

ReverseRightIcon.displayName = "ReverseRightIcon";
