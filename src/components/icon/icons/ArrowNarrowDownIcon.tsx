import type { SVGProps } from "react";

export type ArrowNarrowDownIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowNarrowDownIcon({ size = 24, ...props }: ArrowNarrowDownIconProps) {
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
      <path d="M10.9999 4C10.9999 3.44772 11.4476 3 11.9999 3C12.5522 3 12.9999 3.44772 12.9999 4V17.5859L17.2929 13.293C17.6834 12.9024 18.3164 12.9024 18.707 13.293C19.0975 13.6835 19.0975 14.3165 18.707 14.707L12.707 20.707C12.3164 21.0976 11.6834 21.0976 11.2929 20.707L5.29289 14.707C4.90237 14.3165 4.90237 13.6835 5.29289 13.293C5.68342 12.9024 6.31643 12.9024 6.70696 13.293L10.9999 17.5859V4Z" fill="currentColor"/>
    </svg>
  );
}

ArrowNarrowDownIcon.displayName = "ArrowNarrowDownIcon";
