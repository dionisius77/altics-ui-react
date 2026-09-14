import type { SVGProps } from "react";

export type Coins01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Coins01Icon({ size = 24, ...props }: Coins01IconProps) {
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
      <path d="M21 9C21 5.68629 18.3137 3 15 3C12.3847 3 10.16 4.67417 9.33887 7.00879C13.4872 7.18169 16.8168 10.512 16.9902 14.6602C19.3251 13.8392 21 11.6155 21 9ZM3 15C3 18.3137 5.68629 21 9 21C12.3137 21 15 18.3137 15 15C15 11.6863 12.3137 9 9 9C5.68629 9 3 11.6863 3 15ZM23 9C23 12.8018 20.3487 15.982 16.7939 16.7969C15.9782 20.3495 12.8002 23 9 23C4.58172 23 1 19.4183 1 15C1 11.2001 3.64984 8.02106 7.20215 7.20508C8.01727 3.65073 11.1985 1 15 1C19.4183 1 23 4.58172 23 9Z" fill="currentColor"/>
    </svg>
  );
}

Coins01Icon.displayName = "Coins01Icon";
