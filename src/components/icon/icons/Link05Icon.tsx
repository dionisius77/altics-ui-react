import type { SVGProps } from "react";

export type Link05IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Link05Icon({ size = 24, ...props }: Link05IconProps) {
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
      <path d="M1 12C1 8.68629 3.68629 6 7 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H7C3.68629 18 1 15.3137 1 12ZM21 12C21 9.79086 19.2091 8 17 8H16V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H16V16H17C19.2091 16 21 14.2091 21 12ZM23 12C23 15.3137 20.3137 18 17 18H15.7773C14.7958 17.9998 14.0002 17.2042 14 16.2227V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H14V7.77734C14.0002 6.79585 14.7958 6.00023 15.7773 6H17C20.3137 6 23 8.68629 23 12Z" fill="currentColor"/>
    </svg>
  );
}

Link05Icon.displayName = "Link05Icon";
