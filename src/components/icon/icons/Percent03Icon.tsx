import type { SVGProps } from "react";

export type Percent03IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Percent03Icon({ size = 24, ...props }: Percent03IconProps) {
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
      <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM15.293 7.29297C15.6835 6.90244 16.3165 6.90244 16.707 7.29297C17.0976 7.68349 17.0976 8.31651 16.707 8.70703L8.70703 16.707C8.31651 17.0976 7.68349 17.0976 7.29297 16.707C6.90244 16.3165 6.90244 15.6835 7.29297 15.293L15.293 7.29297ZM15 13.5C15.8284 13.5 16.5 14.1716 16.5 15C16.5 15.8284 15.8284 16.5 15 16.5C14.1716 16.5 13.5 15.8284 13.5 15C13.5 14.1716 14.1716 13.5 15 13.5ZM9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

Percent03Icon.displayName = "Percent03Icon";
