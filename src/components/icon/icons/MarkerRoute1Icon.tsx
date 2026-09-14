import type { SVGProps } from "react";

export type MarkerRoute1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function MarkerRoute1Icon({ size = 24, ...props }: MarkerRoute1IconProps) {
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
      <g clipPath="url(#MarkerRoute1Icon-clip0_13426_12053)">
<path d="M12 0.0419922C9.35398 0.0449033 6.81712 1.09727 4.94598 2.96822C3.07484 4.83918 2.02222 7.37593 2.01904 10.022C2.01904 12.592 4.00904 16.614 7.93404 21.976C8.4013 22.6161 9.0131 23.1369 9.71964 23.4959C10.4262 23.8549 11.2075 24.042 12 24.042C12.7926 24.042 13.5739 23.8549 14.2804 23.4959C14.987 23.1369 15.5988 22.6161 16.066 21.976C19.991 16.614 21.981 12.592 21.981 10.022C21.9779 7.37593 20.9252 4.83918 19.0541 2.96822C17.183 1.09727 14.6461 0.0449033 12 0.0419922ZM12 14C11.2089 14 10.4356 13.7654 9.77776 13.3259C9.11997 12.8863 8.60728 12.2616 8.30452 11.5307C8.00177 10.7998 7.92256 9.99556 8.0769 9.21963C8.23124 8.44371 8.61221 7.73098 9.17162 7.17157C9.73103 6.61216 10.4438 6.23119 11.2197 6.07685C11.9956 5.92251 12.7999 6.00172 13.5308 6.30448C14.2617 6.60723 14.8864 7.11992 15.3259 7.77771C15.7654 8.43551 16 9.20887 16 9.99999C16 11.0609 15.5786 12.0783 14.8285 12.8284C14.0783 13.5786 13.0609 14 12 14Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="MarkerRoute1Icon-clip0_13426_12053">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

MarkerRoute1Icon.displayName = "MarkerRoute1Icon";
