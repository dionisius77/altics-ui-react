import type { SVGProps } from "react";

export type SwitchHorizontal01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function SwitchHorizontal01Icon({ size = 24, ...props }: SwitchHorizontal01IconProps) {
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
      <path d="M7.29297 12.293C7.68349 11.9025 8.31651 11.9025 8.70703 12.293C9.09756 12.6835 9.09756 13.3166 8.70703 13.7071L6.41406 16H20C20.5523 16 21 16.4478 21 17C21 17.5523 20.5523 18 20 18H6.41406L8.70703 20.293C9.09755 20.6835 9.09755 21.3166 8.70703 21.7071C8.31651 22.0976 7.68349 22.0976 7.29297 21.7071L3.29297 17.7071C2.90244 17.3166 2.90244 16.6835 3.29297 16.293L7.29297 12.293ZM15.293 2.29302C15.6835 1.90249 16.3165 1.90249 16.707 2.29302L20.707 6.29302C21.0976 6.68354 21.0976 7.31655 20.707 7.70708L16.707 11.7071C16.3165 12.0976 15.6835 12.0976 15.293 11.7071C14.9024 11.3166 14.9024 10.6835 15.293 10.293L17.5859 8.00005H4C3.44772 8.00005 3 7.55233 3 7.00005C3 6.44776 3.44772 6.00005 4 6.00005H17.5859L15.293 3.70708C14.9024 3.31655 14.9024 2.68354 15.293 2.29302Z" fill="currentColor"/>
    </svg>
  );
}

SwitchHorizontal01Icon.displayName = "SwitchHorizontal01Icon";
