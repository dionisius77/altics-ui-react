import type { SVGProps } from "react";

export type Percent02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Percent02Icon({ size = 24, ...props }: Percent02IconProps) {
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
      <path d="M18.293 4.29297C18.6835 3.90244 19.3165 3.90244 19.707 4.29297C20.0976 4.68349 20.0976 5.31651 19.707 5.70703L5.70703 19.707C5.31651 20.0976 4.68349 20.0976 4.29297 19.707C3.90244 19.3165 3.90244 18.6835 4.29297 18.293L18.293 4.29297ZM18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17ZM8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7ZM20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17ZM10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z" fill="currentColor"/>
    </svg>
  );
}

Percent02Icon.displayName = "Percent02Icon";
