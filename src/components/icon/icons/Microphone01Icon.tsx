import type { SVGProps } from "react";

export type Microphone01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Microphone01Icon({ size = 24, ...props }: Microphone01IconProps) {
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
      <path d="M4 12V10C4 9.44772 4.44772 9 5 9C5.55228 9 6 9.44772 6 10V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10V12C20 16.0795 16.9462 19.4433 13 19.9355V21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H11V19.9355C7.05384 19.4433 4 16.0795 4 12ZM14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12V5ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12Z" fill="currentColor"/>
    </svg>
  );
}

Microphone01Icon.displayName = "Microphone01Icon";
