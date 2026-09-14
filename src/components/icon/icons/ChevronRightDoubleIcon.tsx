import type { SVGProps } from "react";

export type ChevronRightDoubleIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ChevronRightDoubleIcon({ size = 24, ...props }: ChevronRightDoubleIconProps) {
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
      <path d="M5.29289 6.29302C5.68342 5.90249 6.31643 5.90249 6.70696 6.29302L11.707 11.293C12.0975 11.6835 12.0975 12.3166 11.707 12.7071L6.70696 17.7071C6.31643 18.0976 5.68342 18.0976 5.29289 17.7071C4.90237 17.3166 4.90237 16.6835 5.29289 16.293L9.58586 12L5.29289 7.70708C4.90237 7.31655 4.90237 6.68354 5.29289 6.29302ZM12.2929 6.29302C12.6834 5.90249 13.3164 5.90249 13.707 6.29302L18.707 11.293C19.0975 11.6835 19.0975 12.3166 18.707 12.7071L13.707 17.7071C13.3164 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6835 12.2929 16.293L16.5859 12L12.2929 7.70708C11.9024 7.31655 11.9024 6.68354 12.2929 6.29302Z" fill="currentColor"/>
    </svg>
  );
}

ChevronRightDoubleIcon.displayName = "ChevronRightDoubleIcon";
