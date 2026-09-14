import type { SVGProps } from "react";

export type SlashCircle02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function SlashCircle02Icon({ size = 24, ...props }: SlashCircle02IconProps) {
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
      <path d="M21 12C21 9.87476 20.2621 7.92256 19.0303 6.38281L13.4141 12L19.0303 17.6162C20.2619 16.0766 21 14.125 21 12ZM6.38281 19.0303C7.92256 20.2621 9.87476 21 12 21C14.125 21 16.0766 20.2619 17.6162 19.0303L12 13.4141L6.38281 19.0303ZM12 3C9.87498 3 7.92249 3.73712 6.38281 4.96875L12 10.5859L17.6162 4.96875C16.0766 3.7374 14.1247 3 12 3ZM3 12C3 14.1247 3.7374 16.0766 4.96875 17.6162L10.5859 12L4.96875 6.38281C3.73712 7.92249 3 9.87498 3 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

SlashCircle02Icon.displayName = "SlashCircle02Icon";
