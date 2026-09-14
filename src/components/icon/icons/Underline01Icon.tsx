import type { SVGProps } from "react";

export type Underline01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Underline01Icon({ size = 24, ...props }: Underline01IconProps) {
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
      <path d="M20 20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20H20ZM5 11V4C5 3.44772 5.44772 3 6 3C6.55228 3 7 3.44772 7 4V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11Z" fill="currentColor"/>
    </svg>
  );
}

Underline01Icon.displayName = "Underline01Icon";
