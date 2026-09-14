import type { SVGProps } from "react";

export type ChevronSelectorHorizontalIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ChevronSelectorHorizontalIcon({ size = 24, ...props }: ChevronSelectorHorizontalIconProps) {
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
      <path d="M8.29289 6.29302C8.68342 5.90249 9.31643 5.90249 9.70696 6.29302C10.0975 6.68354 10.0975 7.31655 9.70696 7.70708L5.41399 12L9.70696 16.293C10.0975 16.6835 10.0975 17.3166 9.70696 17.7071C9.31643 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6835 3.29289 11.293L8.29289 6.29302ZM14.2929 6.29302C14.6834 5.90249 15.3164 5.90249 15.707 6.29302L20.707 11.293C21.0975 11.6835 21.0975 12.3166 20.707 12.7071L15.707 17.7071C15.3164 18.0976 14.6834 18.0976 14.2929 17.7071C13.9024 17.3166 13.9024 16.6835 14.2929 16.293L18.5859 12L14.2929 7.70708C13.9024 7.31655 13.9024 6.68354 14.2929 6.29302Z" fill="currentColor"/>
    </svg>
  );
}

ChevronSelectorHorizontalIcon.displayName = "ChevronSelectorHorizontalIcon";
