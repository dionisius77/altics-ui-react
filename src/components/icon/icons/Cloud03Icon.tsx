import type { SVGProps } from "react";

export type Cloud03IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Cloud03Icon({ size = 24, ...props }: Cloud03IconProps) {
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
      <path d="M1 11.5C1 6.80558 4.80558 3 9.5 3C12.5452 3 15.2146 4.60184 16.7148 7.00488C20.2052 7.11826 23 9.98206 23 13.5C23 17.0899 20.0898 20 16.5 20H9.5C4.80558 20 1 16.1944 1 11.5ZM3 11.5C3 15.0899 5.91015 18 9.5 18H16.5C18.9853 18 21 15.9853 21 13.5C21 11.0147 18.9853 9 16.5 9C16.4009 9 16.3024 9.0035 16.2051 9.00977C15.8608 9.03185 15.5336 8.87471 15.334 8.60156L15.2559 8.47754L15.0391 8.09766C13.8939 6.23753 11.841 5 9.5 5C5.91015 5 3 7.91015 3 11.5Z" fill="currentColor"/>
    </svg>
  );
}

Cloud03Icon.displayName = "Cloud03Icon";
