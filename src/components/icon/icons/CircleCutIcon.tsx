import type { SVGProps } from "react";

export type CircleCutIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function CircleCutIcon({ size = 24, ...props }: CircleCutIconProps) {
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
      <path d="M11 12C11 8.88093 9.41369 6.13146 7 4.51562C4.58805 6.13015 3 8.8796 3 12C3 15.1202 4.5883 17.8688 7 19.4834C9.41344 17.8675 11 15.1189 11 12ZM13 12C13 15.4173 11.4404 18.4687 8.99805 20.4854C9.9371 20.8176 10.9471 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C10.9473 3 9.93701 3.18152 8.99805 3.51367C11.4407 5.5303 13 8.58244 13 12ZM23 12C23 18.0751 18.0751 23 12 23C10.0246 23 8.1727 22.4761 6.57031 21.5645C6.52665 21.5437 6.48483 21.5193 6.44434 21.4922C3.18806 19.5822 1 16.0478 1 12C1 7.95198 3.18783 4.41675 6.44434 2.50684C6.48481 2.47982 6.52668 2.45528 6.57031 2.43457C8.1726 1.52309 10.0248 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor"/>
    </svg>
  );
}

CircleCutIcon.displayName = "CircleCutIcon";
