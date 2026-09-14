import type { SVGProps } from "react";

export type ArrowNarrowRightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowNarrowRightIcon({ size = 24, ...props }: ArrowNarrowRightIconProps) {
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
      <path d="M13.293 5.29302C13.6835 4.90249 14.3165 4.90249 14.707 5.29302L20.707 11.293C21.0976 11.6835 21.0976 12.3166 20.707 12.7071L14.707 18.7071C14.3165 19.0976 13.6835 19.0976 13.293 18.7071C12.9024 18.3166 12.9024 17.6835 13.293 17.293L17.5859 13H4C3.44772 13 3 12.5523 3 12C3 11.4478 3.44772 11 4 11H17.5859L13.293 6.70708C12.9024 6.31655 12.9024 5.68354 13.293 5.29302Z" fill="currentColor"/>
    </svg>
  );
}

ArrowNarrowRightIcon.displayName = "ArrowNarrowRightIcon";
