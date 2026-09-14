import type { SVGProps } from "react";

export type TerminalCircleIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function TerminalCircleIcon({ size = 24, ...props }: TerminalCircleIconProps) {
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
      <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM6.29297 8.29297C6.68349 7.90244 7.31651 7.90244 7.70703 8.29297L10.707 11.293C11.0976 11.6835 11.0976 12.3165 10.707 12.707L7.70703 15.707C7.31651 16.0976 6.68349 16.0976 6.29297 15.707C5.90244 15.3165 5.90244 14.6835 6.29297 14.293L8.58594 12L6.29297 9.70703C5.90244 9.31651 5.90244 8.68349 6.29297 8.29297ZM17 14C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H13C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14H17ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

TerminalCircleIcon.displayName = "TerminalCircleIcon";
