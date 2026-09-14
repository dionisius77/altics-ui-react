import type { SVGProps } from "react";

export type Asterisk02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Asterisk02Icon({ size = 24, ...props }: Asterisk02IconProps) {
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
      <path d="M11 20V14.4141L6.70703 18.707C6.31651 19.0976 5.68349 19.0976 5.29297 18.707C4.90244 18.3165 4.90244 17.6835 5.29297 17.293L9.58594 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H9.58594L5.29297 6.70703C4.90244 6.31651 4.90244 5.68349 5.29297 5.29297C5.68349 4.90244 6.31651 4.90244 6.70703 5.29297L11 9.58594V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V9.58594L17.293 5.29297C17.6835 4.90244 18.3165 4.90244 18.707 5.29297C19.0976 5.68349 19.0976 6.31651 18.707 6.70703L14.4141 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H14.4141L18.707 17.293C19.0976 17.6835 19.0976 18.3165 18.707 18.707C18.3165 19.0976 17.6835 19.0976 17.293 18.707L13 14.4141V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20Z" fill="currentColor"/>
    </svg>
  );
}

Asterisk02Icon.displayName = "Asterisk02Icon";
