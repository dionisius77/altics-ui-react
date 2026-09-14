import type { SVGProps } from "react";

export type ArrowUpRightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowUpRightIcon({ size = 24, ...props }: ArrowUpRightIconProps) {
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
      <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41406L7.70703 17.707C7.31651 18.0976 6.68349 18.0976 6.29297 17.707C5.90244 17.3165 5.90244 16.6835 6.29297 16.293L14.5859 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17Z" fill="currentColor"/>
    </svg>
  );
}

ArrowUpRightIcon.displayName = "ArrowUpRightIcon";
