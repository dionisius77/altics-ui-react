import type { SVGProps } from "react";

export type MapMarkerEdit1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function MapMarkerEdit1Icon({ size = 24, ...props }: MapMarkerEdit1IconProps) {
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
      <path d="M19.778 3.222C17.7 1.144 14.937 0 12 0C9.063 0 6.3 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11C1 13.939 2.144 16.7 4.25 18.805L8.193 22.448C9.215 23.449 10.568 24 12 24C13.432 24 14.784 23.449 15.786 22.467L19.778 18.778C21.856 16.7 23 13.938 23 11C23 8.062 21.856 5.299 19.778 3.222ZM16.121 11.121L12.707 14.535C11.763 15.479 10.508 15.999 9.172 15.999H8C7.447 15.999 7 15.551 7 14.999V13.828C7 12.493 7.521 11.237 8.465 10.292L11.879 6.878C13.049 5.708 14.951 5.708 16.121 6.878C16.687 7.444 17 8.198 17 8.999C17 9.8 16.687 10.554 16.121 11.121Z" fill="currentColor"/>
<path d="M13.293 8.29312L9.879 11.7071C9.313 12.2741 9 13.0271 9 13.8291V14.0001H9.172C9.962 14.0001 10.734 13.6801 11.293 13.1221L14.707 9.70712C14.896 9.51812 15 9.26712 15 9.00012C15 8.73312 14.896 8.48212 14.707 8.29312C14.316 7.90212 13.684 7.90312 13.293 8.29312Z" fill="black"/>
    </svg>
  );
}

MapMarkerEdit1Icon.displayName = "MapMarkerEdit1Icon";
