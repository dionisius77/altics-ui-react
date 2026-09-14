import type { SVGProps } from "react";

export type TruckTow1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function TruckTow1Icon({ size = 24, ...props }: TruckTow1IconProps) {
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
      <g clipPath="url(#TruckTow1Icon-clip0_13426_12040)">
<path d="M24 11V12H16V7.99997C16 6.89697 16.897 5.99997 18 5.99997H19C21.757 5.99997 24 8.24297 24 11ZM16 19H21C22.657 19 24 17.657 24 16V14H16V19ZM3.5 -0.0510254H3C2.448 -0.0510254 2 0.395975 2 0.948975V6.44897C2 6.72497 1.776 6.94897 1.5 6.94897H1C0.448 6.94897 0 7.39697 0 7.94897C0 8.50097 0.448 8.94897 1 8.94897H1.5C2.881 8.94897 4 7.82997 4 6.44897V3.11097L11.408 12H2.5C1.119 12 0 13.119 0 14.5V16.5C0 17.881 1.119 19 2.5 19H14V11.987L4.268 0.308975C4.078 0.0809746 3.797 -0.0510254 3.5 -0.0510254ZM3.058 21C3.024 21.162 3 21.328 3 21.5C3 22.881 4.119 24 5.5 24C6.881 24 8 22.881 8 21.5C8 21.328 7.976 21.162 7.942 21H3.058ZM16.058 21C16.024 21.162 16 21.328 16 21.5C16 22.881 17.119 24 18.5 24C19.881 24 21 22.881 21 21.5C21 21.328 20.976 21.162 20.942 21H16.057H16.058Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="TruckTow1Icon-clip0_13426_12040">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

TruckTow1Icon.displayName = "TruckTow1Icon";
