import type { SVGProps } from "react";

export type Recording03IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Recording03Icon({ size = 24, ...props }: Recording03IconProps) {
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
      <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM13 17V7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17ZM9 15V9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15ZM5 13V11C5 10.4477 5.44772 10 6 10C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13ZM17 13V11C17 10.4477 17.4477 10 18 10C18.5523 10 19 10.4477 19 11V13C19 13.5523 18.5523 14 18 14C17.4477 14 17 13.5523 17 13ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

Recording03Icon.displayName = "Recording03Icon";
