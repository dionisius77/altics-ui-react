import type { SVGProps } from "react";

export type ActivityIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ActivityIcon({ size = 24, ...props }: ActivityIconProps) {
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
      <path d="M9 2C9.43033 2 9.81204 2.27541 9.94824 2.68359L15 17.8389L17.0518 11.6836L17.1133 11.5371C17.2835 11.2108 17.6234 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18.7207L15.9482 21.3164C15.812 21.7246 15.4303 22 15 22C14.5697 22 14.188 21.7246 14.0518 21.3164L9 6.16113L6.94824 12.3164C6.81204 12.7246 6.43033 13 6 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H5.2793L8.05176 2.68359L8.11328 2.53711C8.28349 2.2108 8.62335 2 9 2Z" fill="currentColor"/>
    </svg>
  );
}

ActivityIcon.displayName = "ActivityIcon";
