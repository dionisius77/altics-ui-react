import type { SVGProps } from "react";

export type SwitchHorizontal02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function SwitchHorizontal02Icon({ size = 24, ...props }: SwitchHorizontal02IconProps) {
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
      <path d="M15.293 12.293C15.6835 11.9025 16.3165 11.9025 16.707 12.293L20.707 16.293C21.0976 16.6835 21.0976 17.3166 20.707 17.7071L16.707 21.7071C16.3165 22.0976 15.6835 22.0976 15.293 21.7071C14.9024 21.3166 14.9024 20.6835 15.293 20.293L17.5859 18H4C3.44772 18 3 17.5523 3 17C3 16.4478 3.44772 16 4 16H17.5859L15.293 13.7071C14.9024 13.3166 14.9024 12.6835 15.293 12.293ZM7.29297 2.29302C7.68349 1.90249 8.31651 1.90249 8.70703 2.29302C9.09756 2.68354 9.09756 3.31655 8.70703 3.70708L6.41406 6.00005H20C20.5523 6.00005 21 6.44776 21 7.00005C21 7.55233 20.5523 8.00005 20 8.00005H6.41406L8.70703 10.293C9.09756 10.6835 9.09756 11.3166 8.70703 11.7071C8.31651 12.0976 7.68349 12.0976 7.29297 11.7071L3.29297 7.70708C2.90244 7.31655 2.90244 6.68354 3.29297 6.29302L7.29297 2.29302Z" fill="currentColor"/>
    </svg>
  );
}

SwitchHorizontal02Icon.displayName = "SwitchHorizontal02Icon";
