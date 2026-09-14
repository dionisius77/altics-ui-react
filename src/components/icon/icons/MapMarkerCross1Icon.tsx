import type { SVGProps } from "react";

export type MapMarkerCross1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function MapMarkerCross1Icon({ size = 24, ...props }: MapMarkerCross1IconProps) {
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
      <g clipPath="url(#MapMarkerCross1Icon-clip0_13426_12068)">
<path d="M19.7902 3.27864C15.5427 -1.04197 8.59681 -1.10122 4.2762 3.14631C-0.044409 7.39384 -0.103659 14.3397 4.14387 18.6603C4.19665 18.7141 4.25 18.7672 4.3039 18.8198L8.23634 22.453C10.3386 24.5096 13.6964 24.5181 15.809 22.472L19.7902 18.7929C24.0742 14.5087 24.0742 7.56283 19.7902 3.27864ZM15.7302 13.3226C16.1263 13.7052 16.1373 14.3366 15.7546 14.7328C15.3719 15.1289 14.7406 15.1399 14.3444 14.7573C14.3361 14.7492 14.328 14.7411 14.32 14.7328L12.0331 12.4459L9.74623 14.7328C9.35004 15.1155 8.71869 15.1045 8.33604 14.7084C7.96273 14.3219 7.96273 13.7091 8.33604 13.3226L10.6229 11.0358L8.33604 8.74895C7.93986 8.36631 7.92889 7.73495 8.31153 7.33877C8.69417 6.94258 9.32553 6.93161 9.72172 7.31425C9.73001 7.32227 9.73822 7.33047 9.74623 7.33877L12.0331 9.62561L14.3199 7.33877C14.7026 6.94258 15.334 6.93161 15.7301 7.3143C16.1262 7.69699 16.1373 8.32834 15.7546 8.72449C15.7466 8.73278 15.7384 8.74094 15.7301 8.74895L13.4433 11.0358L15.7302 13.3226Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="MapMarkerCross1Icon-clip0_13426_12068">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

MapMarkerCross1Icon.displayName = "MapMarkerCross1Icon";
