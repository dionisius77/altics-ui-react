import type { SVGProps } from "react";

export type AlignLeft01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function AlignLeft01Icon({ size = 24, ...props }: AlignLeft01IconProps) {
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
      <path d="M2 21V3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21ZM13.293 4.29297C13.6835 3.90244 14.3165 3.90244 14.707 4.29297C15.0976 4.68349 15.0976 5.31651 14.707 5.70703L9.41406 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H9.41406L14.707 18.293C15.0976 18.6835 15.0976 19.3165 14.707 19.707C14.3165 20.0976 13.6835 20.0976 13.293 19.707L6.29297 12.707C5.90244 12.3165 5.90244 11.6835 6.29297 11.293L13.293 4.29297Z" fill="currentColor"/>
    </svg>
  );
}

AlignLeft01Icon.displayName = "AlignLeft01Icon";
