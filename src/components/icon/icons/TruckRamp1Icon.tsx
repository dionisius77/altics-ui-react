import type { SVGProps } from "react";

export type TruckRamp1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function TruckRamp1Icon({ size = 24, ...props }: TruckRamp1IconProps) {
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
      <g clipPath="url(#TruckRamp1Icon-clip0_13426_12013)">
<path d="M22.0695 3.96107L22.6455 3.68707C23.3935 3.33107 23.7105 2.43507 23.3545 1.68807C22.9995 0.94007 22.1025 0.62507 21.3555 0.97807L20.7785 1.25207C19.1485 2.02907 18.0835 3.63407 17.9995 5.44007L17.4935 16.2331C17.4305 16.2501 17.3675 16.2721 17.3055 16.2981C16.0005 16.8511 13.4145 17.8551 10.7495 18.3711C6.98547 19.0991 2.08447 18.9941 2.03547 18.9901C1.20247 18.9511 0.51947 19.6261 0.49947 20.4541C0.47947 21.2821 1.13447 21.9701 1.96247 21.9901C2.01247 21.9901 2.32847 21.9981 2.83647 21.9981C4.49347 21.9981 8.19047 21.9221 11.3195 21.3161C12.9735 20.9961 14.5875 20.5091 15.9345 20.0391C16.1235 21.7981 17.6125 23.1671 19.4205 23.1671C21.3575 23.1671 22.9275 21.5971 22.9275 19.6601C22.9275 18.0971 21.9045 16.7731 20.4915 16.3201L20.9945 5.57907C21.0265 4.88107 21.4375 4.26107 22.0665 3.96107H22.0695Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="TruckRamp1Icon-clip0_13426_12013">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

TruckRamp1Icon.displayName = "TruckRamp1Icon";
