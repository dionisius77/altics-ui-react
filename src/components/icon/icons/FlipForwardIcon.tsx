import type { SVGProps } from "react";

export type FlipForwardIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function FlipForwardIcon({ size = 24, ...props }: FlipForwardIconProps) {
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
      <path d="M2 13.5C2 10.4625 4.46243 8.00005 7.5 8.00005H18.5859L16.293 5.70708C15.9024 5.31655 15.9024 4.68354 16.293 4.29302C16.6835 3.90249 17.3165 3.90249 17.707 4.29302L21.707 8.29302C22.0976 8.68354 22.0976 9.31655 21.707 9.70708L17.707 13.7071C17.3165 14.0976 16.6835 14.0976 16.293 13.7071C15.9024 13.3166 15.9024 12.6835 16.293 12.293L18.5859 10H7.5C5.567 10 4 11.567 4 13.5C4 15.433 5.567 17 7.5 17H12C12.5523 17 13 17.4478 13 18C13 18.5523 12.5523 19 12 19H7.5C4.46243 19 2 16.5376 2 13.5Z" fill="currentColor"/>
    </svg>
  );
}

FlipForwardIcon.displayName = "FlipForwardIcon";
