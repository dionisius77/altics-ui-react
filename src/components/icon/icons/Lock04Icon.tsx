import type { SVGProps } from "react";

export type Lock04IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Lock04Icon({ size = 24, ...props }: Lock04IconProps) {
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
      <path d="M18 15C18 11.6863 15.3137 9 12 9C8.68629 9 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15ZM11 16V14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V8.07227C9.17689 7.39127 10.5425 7 12 7C13.4575 7 14.8231 7.39127 16 8.07227V8ZM18 9.71094C19.244 11.121 20 12.9718 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 12.9718 4.75604 11.121 6 9.71094V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V9.71094Z" fill="currentColor"/>
    </svg>
  );
}

Lock04Icon.displayName = "Lock04Icon";
