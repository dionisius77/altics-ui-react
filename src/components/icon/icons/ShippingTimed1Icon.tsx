import type { SVGProps } from "react";

export type ShippingTimed1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ShippingTimed1Icon({ size = 24, ...props }: ShippingTimed1IconProps) {
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
      <path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5.509 6.923L4.293 5.707C4.105 5.519 4 5.265 4 5V3C4 2.448 4.448 2 5 2C5.552 2 6 2.448 6 3V4.586L6.923 5.509C7.313 5.899 7.313 6.533 6.923 6.923C6.533 7.313 5.899 7.313 5.509 6.923ZM19.942 20C19.976 20.162 20 20.328 20 20.5C20 21.881 18.881 23 17.5 23C16.119 23 15 21.881 15 20.5C15 20.328 15.024 20.162 15.058 20H19.943H19.942ZM8.942 20C8.976 20.162 9 20.328 9 20.5C9 21.881 7.881 23 6.5 23C5.119 23 4 21.881 4 20.5C4 20.328 4.024 20.162 4.058 20H8.942ZM4 18C1.791 18 0 16.209 0 14V9.893C1.272 11.192 3.043 12 5 12C8.859 12 12 8.86 12 5C12 3.541 11.551 2.184 10.784 1.061C13.173 1.437 15 3.505 15 6V18H4ZM17 13H24V14C24 16.209 22.209 18 20 18H17V13ZM24 10V11H17V5H19C21.761 5 24 7.239 24 10Z" fill="currentColor"/>
    </svg>
  );
}

ShippingTimed1Icon.displayName = "ShippingTimed1Icon";
