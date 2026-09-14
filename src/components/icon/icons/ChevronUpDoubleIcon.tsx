import type { SVGProps } from "react";

export type ChevronUpDoubleIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ChevronUpDoubleIcon({ size = 24, ...props }: ChevronUpDoubleIconProps) {
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
      <path d="M11.3691 12.2246C11.7618 11.9043 12.3408 11.9269 12.707 12.293L17.707 17.293C18.0975 17.6835 18.0975 18.3165 17.707 18.707C17.3164 19.0976 16.6834 19.0976 16.2929 18.707L11.9999 14.4141L7.70696 18.707C7.31643 19.0976 6.68342 19.0976 6.29289 18.707C5.90237 18.3165 5.90237 17.6835 6.29289 17.293L11.2929 12.293L11.3691 12.2246ZM11.3691 5.22462C11.7618 4.90427 12.3408 4.92686 12.707 5.29298L17.707 10.293C18.0975 10.6835 18.0975 11.3165 17.707 11.707C17.3164 12.0976 16.6834 12.0976 16.2929 11.707L11.9999 7.41407L7.70696 11.707C7.31643 12.0976 6.68342 12.0976 6.29289 11.707C5.90237 11.3165 5.90237 10.6835 6.29289 10.293L11.2929 5.29298L11.3691 5.22462Z" fill="currentColor"/>
    </svg>
  );
}

ChevronUpDoubleIcon.displayName = "ChevronUpDoubleIcon";
