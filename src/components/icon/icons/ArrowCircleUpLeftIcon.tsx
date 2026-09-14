import type { SVGProps } from "react";

export type ArrowCircleUpLeftIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowCircleUpLeftIcon({ size = 24, ...props }: ArrowCircleUpLeftIconProps) {
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
      <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM8 15V9C8.00003 8.4478 8.44782 8.0001 9 8H15C15.5523 8 16 8.44774 16 9C16 9.55228 15.5523 10 15 10H11.4141L15.707 14.293C16.0976 14.6835 16.0976 15.3165 15.707 15.707C15.3165 16.0974 14.6835 16.0975 14.293 15.707L10 11.4141V15C10 15.5523 9.55228 16 9 16C8.4478 15.9999 8 15.5522 8 15ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

ArrowCircleUpLeftIcon.displayName = "ArrowCircleUpLeftIcon";
