import type { SVGProps } from "react";

export type ArrowsDownIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowsDownIcon({ size = 24, ...props }: ArrowsDownIconProps) {
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
      <path d="M5.99992 4C5.99992 3.44772 6.44764 3 6.99992 3C7.55221 3 7.99992 3.44772 7.99992 4V17.5859L10.2929 15.293C10.6834 14.9024 11.3164 14.9024 11.707 15.293C12.0975 15.6835 12.0975 16.3165 11.707 16.707L7.70696 20.707C7.31643 21.0976 6.68342 21.0976 6.29289 20.707L2.29289 16.707C1.90237 16.3165 1.90237 15.6835 2.29289 15.293C2.68342 14.9024 3.31643 14.9024 3.70696 15.293L5.99992 17.5859V4ZM15.9999 4C15.9999 3.44772 16.4476 3 16.9999 3C17.5522 3 17.9999 3.44772 17.9999 4V12.5859L20.2929 10.293C20.6834 9.90244 21.3164 9.90244 21.707 10.293C22.0975 10.6835 22.0975 11.3165 21.707 11.707L17.707 15.707C17.3164 16.0976 16.6834 16.0976 16.2929 15.707L12.2929 11.707C11.9024 11.3165 11.9024 10.6835 12.2929 10.293C12.6834 9.90244 13.3164 9.90244 13.707 10.293L15.9999 12.5859V4Z" fill="currentColor"/>
    </svg>
  );
}

ArrowsDownIcon.displayName = "ArrowsDownIcon";
