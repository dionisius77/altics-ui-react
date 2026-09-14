import type { SVGProps } from "react";

export type Italic02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Italic02Icon({ size = 24, ...props }: Italic02IconProps) {
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
      <path d="M19.5 3C20.0523 3 20.5 3.44772 20.5 4C20.5 4.55228 20.0523 5 19.5 5H17.4434L12.1934 19H14.5C15.0523 19 15.5 19.4477 15.5 20C15.5 20.5523 15.0523 21 14.5 21H4.5C3.94772 21 3.5 20.5523 3.5 20C3.5 19.4477 3.94772 19 4.5 19H6.55664L11.8066 5H9.5C8.94772 5 8.5 4.55228 8.5 4C8.5 3.44772 8.94772 3 9.5 3H19.5ZM8.69336 19H10.0566L15.3066 5H13.9434L8.69336 19Z" fill="currentColor"/>
    </svg>
  );
}

Italic02Icon.displayName = "Italic02Icon";
