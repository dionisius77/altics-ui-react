import type { SVGProps } from "react";

export type Percent01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Percent01Icon({ size = 24, ...props }: Percent01IconProps) {
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
      <path d="M18.2929 4.29295C18.6834 3.90243 19.3164 3.90243 19.707 4.29295C20.0975 4.68348 20.0975 5.31649 19.707 5.70702L5.70696 19.707C5.31643 20.0975 4.68342 20.0975 4.29289 19.707C3.90237 19.3165 3.90237 18.6835 4.29289 18.293L18.2929 4.29295ZM15.4999 17.5C15.4999 16.3954 16.3954 15.5 17.4999 15.5C18.6045 15.5 19.4999 16.3954 19.4999 17.5C19.4999 18.6046 18.6045 19.5 17.4999 19.5C16.3954 19.5 15.4999 18.6046 15.4999 17.5ZM4.49992 6.49999C4.49992 5.39542 5.39535 4.49999 6.49992 4.49999C7.60449 4.49999 8.49992 5.39542 8.49992 6.49999C8.49992 7.60455 7.60449 8.49999 6.49992 8.49999C5.39535 8.49999 4.49992 7.60455 4.49992 6.49999Z" fill="currentColor"/>
    </svg>
  );
}

Percent01Icon.displayName = "Percent01Icon";
