import type { SVGProps } from "react";

export type ChevronDownDoubleIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ChevronDownDoubleIcon({ size = 24, ...props }: ChevronDownDoubleIconProps) {
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
      <path d="M16.2929 12.293C16.6834 11.9025 17.3164 11.9025 17.707 12.293C18.0975 12.6835 18.0975 13.3166 17.707 13.7071L12.707 18.7071C12.3164 19.0976 11.6834 19.0976 11.2929 18.7071L6.29289 13.7071C5.90237 13.3166 5.90237 12.6835 6.29289 12.293C6.68342 11.9025 7.31643 11.9025 7.70696 12.293L11.9999 16.586L16.2929 12.293ZM16.2929 5.29302C16.6834 4.90249 17.3164 4.90249 17.707 5.29302C18.0975 5.68354 18.0975 6.31655 17.707 6.70708L12.707 11.7071C12.3164 12.0976 11.6834 12.0976 11.2929 11.7071L6.29289 6.70708C5.90237 6.31655 5.90237 5.68354 6.29289 5.29302C6.68342 4.90249 7.31643 4.90249 7.70696 5.29302L11.9999 9.58598L16.2929 5.29302Z" fill="currentColor"/>
    </svg>
  );
}

ChevronDownDoubleIcon.displayName = "ChevronDownDoubleIcon";
