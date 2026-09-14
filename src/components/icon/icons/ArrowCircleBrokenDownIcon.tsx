import type { SVGProps } from "react";

export type ArrowCircleBrokenDownIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowCircleBrokenDownIcon({ size = 24, ...props }: ArrowCircleBrokenDownIconProps) {
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
      <path d="M1 12C1 7.92734 3.21393 4.37315 6.49902 2.47266C6.97698 2.19617 7.58861 2.35908 7.86523 2.83691C8.14172 3.31487 7.97879 3.92649 7.50098 4.20312C4.80826 5.76078 3 8.66999 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66999 19.1917 5.76078 16.499 4.20312C16.0212 3.92649 15.8583 3.31487 16.1348 2.83691C16.4114 2.35908 17.023 2.19617 17.501 2.47266C20.7861 4.37315 23 7.92734 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V13.5859L15.293 11.293C15.6835 10.9024 16.3165 10.9024 16.707 11.293C17.0976 11.6835 17.0976 12.3165 16.707 12.707L12.707 16.707C12.3165 17.0976 11.6835 17.0976 11.293 16.707L7.29297 12.707C6.90244 12.3165 6.90244 11.6835 7.29297 11.293C7.68349 10.9024 8.31651 10.9024 8.70703 11.293L11 13.5859V2Z" fill="currentColor"/>
    </svg>
  );
}

ArrowCircleBrokenDownIcon.displayName = "ArrowCircleBrokenDownIcon";
