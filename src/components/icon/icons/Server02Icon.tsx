import type { SVGProps } from "react";

export type Server02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Server02Icon({ size = 24, ...props }: Server02IconProps) {
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
      <path d="M21 16C21 14.3431 19.6569 13 18 13H6C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16ZM6.00977 15C6.56205 15 7.00977 15.4477 7.00977 16C7.00977 16.5523 6.56205 17 6.00977 17H6C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15H6.00977ZM6.00977 7C6.56205 7 7.00977 7.44772 7.00977 8C7.00977 8.55228 6.56205 9 6.00977 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H6.00977ZM21 8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8C3 9.65685 4.34315 11 6 11H18C19.6569 11 21 9.65685 21 8ZM23 8C23 9.63602 22.2137 11.0878 20.999 12C22.2137 12.9122 23 14.364 23 16C23 18.7614 20.7614 21 18 21H6C3.23858 21 1 18.7614 1 16C1 14.3643 1.78565 12.9122 3 12C1.78565 11.0878 1 9.63574 1 8C1 5.23858 3.23858 3 6 3H18C20.7614 3 23 5.23858 23 8Z" fill="currentColor"/>
    </svg>
  );
}

Server02Icon.displayName = "Server02Icon";
