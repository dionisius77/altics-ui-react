import type { SVGProps } from "react";

export type ChevronLeftDoubleIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ChevronLeftDoubleIcon({ size = 24, ...props }: ChevronLeftDoubleIconProps) {
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
      <path d="M10.2929 6.29302C10.6834 5.90249 11.3164 5.90249 11.707 6.29302C12.0975 6.68354 12.0975 7.31655 11.707 7.70708L7.41399 12L11.707 16.293C12.0975 16.6835 12.0975 17.3166 11.707 17.7071C11.3164 18.0976 10.6834 18.0976 10.2929 17.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6835 5.29289 11.293L10.2929 6.29302ZM17.2929 6.29302C17.6834 5.90249 18.3164 5.90249 18.707 6.29302C19.0975 6.68354 19.0975 7.31655 18.707 7.70708L14.414 12L18.707 16.293C19.0975 16.6835 19.0975 17.3166 18.707 17.7071C18.3164 18.0976 17.6834 18.0976 17.2929 17.7071L12.2929 12.7071C11.9024 12.3166 11.9024 11.6835 12.2929 11.293L17.2929 6.29302Z" fill="currentColor"/>
    </svg>
  );
}

ChevronLeftDoubleIcon.displayName = "ChevronLeftDoubleIcon";
