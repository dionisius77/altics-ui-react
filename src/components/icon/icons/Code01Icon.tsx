import type { SVGProps } from "react";

export type Code01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Code01Icon({ size = 24, ...props }: Code01IconProps) {
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
      <path d="M7.29289 5.29302C7.68342 4.90249 8.31643 4.90249 8.70696 5.29302C9.09748 5.68354 9.09748 6.31655 8.70696 6.70708L3.41399 12L8.70696 17.293C9.09748 17.6835 9.09748 18.3166 8.70696 18.7071C8.31643 19.0976 7.68342 19.0976 7.29289 18.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6835 1.29289 11.293L7.29289 5.29302ZM15.2929 5.29302C15.6834 4.90249 16.3164 4.90249 16.707 5.29302L22.707 11.293C23.0975 11.6835 23.0975 12.3166 22.707 12.7071L16.707 18.7071C16.3164 19.0976 15.6834 19.0976 15.2929 18.7071C14.9024 18.3166 14.9024 17.6835 15.2929 17.293L20.5859 12L15.2929 6.70708C14.9024 6.31655 14.9024 5.68354 15.2929 5.29302Z" fill="currentColor"/>
    </svg>
  );
}

Code01Icon.displayName = "Code01Icon";
