import type { SVGProps } from "react";

export type MapMarkerQuestion1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function MapMarkerQuestion1Icon({ size = 24, ...props }: MapMarkerQuestion1IconProps) {
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
      <path d="M19.778 3.222C17.7 1.145 14.938 0 12 0C9.062 0 6.299 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11C1 13.939 2.144 16.7 4.25 18.805L8.193 22.448C9.216 23.449 10.568 24 12 24C13.432 24 14.784 23.449 15.787 22.467L19.779 18.778C21.857 16.7 23.001 13.938 23.001 11C23.001 8.062 21.855 5.299 19.778 3.222ZM12 19C11.172 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19ZM13.929 11.505C13.408 11.792 13 12.449 13 13V14C13 14.552 12.552 15 12 15C11.448 15 11 14.552 11 14V13C11 11.726 11.807 10.391 12.963 9.753C13.725 9.333 14.12 8.499 13.967 7.628C13.829 6.841 13.157 6.17 12.37 6.032C11.765 5.925 11.175 6.079 10.715 6.467C10.26 6.848 10 7.407 10 8C10 8.552 9.552 9 9 9C8.448 9 8 8.552 8 8C8 6.815 8.521 5.698 9.429 4.936C10.337 4.174 11.535 3.859 12.716 4.063C14.329 4.346 15.654 5.67 15.937 7.283C16.235 8.981 15.428 10.678 13.929 11.505Z" fill="currentColor"/>
    </svg>
  );
}

MapMarkerQuestion1Icon.displayName = "MapMarkerQuestion1Icon";
