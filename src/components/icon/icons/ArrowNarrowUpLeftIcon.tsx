import type { SVGProps } from "react";

export type ArrowNarrowUpLeftIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowNarrowUpLeftIcon({ size = 24, ...props }: ArrowNarrowUpLeftIconProps) {
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
      <path d="M5 14V6C5 5.44772 5.44772 5 6 5H14C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H8.41406L18.707 17.293C19.0976 17.6835 19.0976 18.3165 18.707 18.707C18.3165 19.0976 17.6835 19.0976 17.293 18.707L7 8.41406V14C7 14.5523 6.55228 15 6 15C5.44772 15 5 14.5523 5 14Z" fill="currentColor"/>
    </svg>
  );
}

ArrowNarrowUpLeftIcon.displayName = "ArrowNarrowUpLeftIcon";
