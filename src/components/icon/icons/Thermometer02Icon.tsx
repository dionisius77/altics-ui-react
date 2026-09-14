import type { SVGProps } from "react";

export type Thermometer02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Thermometer02Icon({ size = 24, ...props }: Thermometer02IconProps) {
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
      <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5V13.7578C10.5 14.0914 10.3338 14.4032 10.0566 14.5889C9.11613 15.2184 8.5 16.2875 8.5 17.5C8.5 19.433 10.067 21 12 21C13.933 21 15.5 19.433 15.5 17.5C15.5 16.2875 14.8839 15.2184 13.9434 14.5889C13.6662 14.4032 13.5 14.0914 13.5 13.7578V4.5ZM10 17.5C10 16.3954 10.8954 15.5 12 15.5C13.1046 15.5 14 16.3954 14 17.5C14 18.6046 13.1046 19.5 12 19.5C10.8954 19.5 10 18.6046 10 17.5ZM15.5 13.2598C16.7193 14.2674 17.5 15.7918 17.5 17.5C17.5 20.5376 15.0376 23 12 23C8.96243 23 6.5 20.5376 6.5 17.5C6.5 15.7918 7.28068 14.2674 8.5 13.2598V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V13.2598Z" fill="currentColor"/>
    </svg>
  );
}

Thermometer02Icon.displayName = "Thermometer02Icon";
