import type { SVGProps } from "react";

export type Asterisk01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Asterisk01Icon({ size = 24, ...props }: Asterisk01IconProps) {
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
      <path d="M11 22V14.4141L5.63574 19.7783C5.2452 20.1686 4.61213 20.1688 4.22168 19.7783C3.83123 19.3879 3.83138 18.7548 4.22168 18.3643L9.58594 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H9.58594L4.22168 5.63574C3.83138 5.2452 3.83123 4.61213 4.22168 4.22168C4.61213 3.83123 5.2452 3.83138 5.63574 4.22168L11 9.58594V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V9.58594L18.3643 4.22168C18.7548 3.83138 19.3879 3.83123 19.7783 4.22168C20.1688 4.61213 20.1686 5.2452 19.7783 5.63574L14.4141 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H14.4141L19.7783 18.3643C20.1686 18.7548 20.1688 19.3879 19.7783 19.7783C19.3879 20.1688 18.7548 20.1686 18.3643 19.7783L13 14.4141V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22Z" fill="currentColor"/>
    </svg>
  );
}

Asterisk01Icon.displayName = "Asterisk01Icon";
