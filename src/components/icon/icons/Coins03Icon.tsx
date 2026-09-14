import type { SVGProps } from "react";

export type Coins03IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Coins03Icon({ size = 24, ...props }: Coins03IconProps) {
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
      <path d="M15 15C15 11.6863 12.3137 9 9 9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21C12.3137 21 15 18.3137 15 15ZM21 9C21 5.68629 18.3137 3 15 3C13.3649 3 11.884 3.65249 10.8008 4.71387C10.4064 5.10037 9.77327 5.09454 9.38672 4.7002C9.00019 4.30575 9.00696 3.67268 9.40137 3.28613C10.8432 1.87321 12.8206 1 15 1C19.4183 1 23 4.58172 23 9C23 11.1795 22.1268 13.1568 20.7139 14.5986C20.3273 14.9931 19.6943 14.9998 19.2998 14.6133C18.9055 14.2267 18.8996 13.5936 19.2861 13.1992C20.3475 12.116 21 10.6351 21 9ZM17 15C17 19.4183 13.4183 23 9 23C4.58172 23 1 19.4183 1 15C1 10.5817 4.58172 7 9 7C13.4183 7 17 10.5817 17 15Z" fill="currentColor"/>
    </svg>
  );
}

Coins03Icon.displayName = "Coins03Icon";
