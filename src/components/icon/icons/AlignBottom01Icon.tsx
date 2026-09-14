import type { SVGProps } from "react";

export type AlignBottom01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function AlignBottom01Icon({ size = 24, ...props }: AlignBottom01IconProps) {
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
      <path d="M21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H21ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V14.5859L18.293 9.29297C18.6835 8.90244 19.3165 8.90245 19.707 9.29297C20.0976 9.68349 20.0976 10.3165 19.707 10.707L12.707 17.707C12.5195 17.8946 12.2652 18 12 18C11.7348 18 11.4805 17.8946 11.293 17.707L4.29297 10.707C3.90244 10.3165 3.90245 9.68349 4.29297 9.29297C4.68349 8.90244 5.31651 8.90244 5.70703 9.29297L11 14.5859V3Z" fill="currentColor"/>
    </svg>
  );
}

AlignBottom01Icon.displayName = "AlignBottom01Icon";
