import type { SVGProps } from "react";

export type LocationArrowIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function LocationArrowIcon({ size = 24, ...props }: LocationArrowIconProps) {
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
      <g clipPath="url(#LocationArrowIcon-clip0_13426_11917)">
<path d="M22.8582 1.14198C21.7691 0.0519816 20.1952 -0.287018 18.7222 0.267982L2.32815 7.06198C0.392151 7.79098 -0.205849 9.59798 0.0611506 11.064C0.329151 12.532 1.52515 14.012 3.59515 14.012H9.97415V20.406C9.97415 22.475 11.4542 23.672 12.9212 23.938C13.1402 23.978 13.3662 23.999 13.5952 23.999C14.9042 23.999 16.3032 23.325 16.9142 21.704L23.7442 5.24698C24.2882 3.80498 23.9492 2.23098 22.8582 1.14198ZM21.8842 4.51098L15.0542 20.968C14.7082 21.883 13.9092 22.086 13.2802 21.972C12.6482 21.857 11.9732 21.385 11.9732 20.407V13.013C11.9732 12.46 11.5261 12.013 10.9732 12.013H3.59515C2.61615 12.013 2.14415 11.338 2.02915 10.706C1.91515 10.075 2.11815 9.27698 3.06415 8.92098L19.4582 2.12698C19.6842 2.04198 19.9132 1.99998 20.1382 1.99998C20.6192 1.99998 21.0802 2.19098 21.4452 2.55598C21.9802 3.09098 22.1392 3.83398 21.8842 4.51098Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="LocationArrowIcon-clip0_13426_11917">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

LocationArrowIcon.displayName = "LocationArrowIcon";
