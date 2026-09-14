import type { SVGProps } from "react";

export type Strikethrough01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Strikethrough01Icon({ size = 24, ...props }: Strikethrough01IconProps) {
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
      <path d="M5 16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16C7 17.6569 8.34315 19 10 19H14C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H18C18.6278 13.8357 19 14.8743 19 16C19 18.7614 16.7614 21 14 21H10C7.23858 21 5 18.7614 5 16ZM17 8C17 6.34315 15.6569 5 14 5H10C8.34315 5 7 6.34315 7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8C5 5.23858 7.23858 3 10 3H14C16.7614 3 19 5.23858 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z" fill="currentColor"/>
    </svg>
  );
}

Strikethrough01Icon.displayName = "Strikethrough01Icon";
