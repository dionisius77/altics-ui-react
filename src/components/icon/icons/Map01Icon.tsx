import type { SVGProps } from "react";

export type Map01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Map01Icon({ size = 24, ...props }: Map01IconProps) {
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
      <path d="M8.62207 1.07424C8.90449 0.958904 9.22706 0.978122 9.49609 1.13186L15.959 4.82522L21.4453 1.16799C21.7521 0.963464 22.1466 0.944285 22.4717 1.11819C22.7968 1.29221 23 1.63123 23 2.00002V18C23 18.3344 22.8329 18.6466 22.5547 18.8321L16.5547 22.8321C16.2395 23.0422 15.8328 23.0561 15.5039 22.8682L9 19.1514L2.49609 22.8682C2.18663 23.045 1.80634 23.0441 1.49805 22.8653C1.18973 22.6863 1 22.3565 1 22V6.00002C1 5.64117 1.19233 5.3099 1.50391 5.13186L8.50391 1.13186L8.62207 1.07424ZM3 6.5801V20.2764L8 17.419V3.72268L3 6.5801ZM10 17.419L15 20.2764V6.5801L10 3.72268V17.419ZM17 6.53518V20.1309L21 17.4649V3.86819L17 6.53518Z" fill="currentColor"/>
    </svg>
  );
}

Map01Icon.displayName = "Map01Icon";
