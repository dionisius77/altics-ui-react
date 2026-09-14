import type { SVGProps } from "react";

export type Toggle02LeftIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Toggle02LeftIcon({ size = 24, ...props }: Toggle02LeftIconProps) {
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
      <path d="M11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C9.20914 16 11 14.2091 11 12ZM13 12C13 13.0932 12.7061 14.1173 12.1953 15H18C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9H12.1953C12.7061 9.88272 13 10.9068 13 12ZM23 12C23 14.7614 20.7614 17 18 17H10.3164C9.36629 17.6315 8.22632 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C8.22632 6 9.36629 6.36854 10.3164 7H18C20.7614 7 23 9.23858 23 12Z" fill="currentColor"/>
    </svg>
  );
}

Toggle02LeftIcon.displayName = "Toggle02LeftIcon";
