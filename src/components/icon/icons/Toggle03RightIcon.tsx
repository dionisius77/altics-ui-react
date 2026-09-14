import type { SVGProps } from "react";

export type Toggle03RightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Toggle03RightIcon({ size = 24, ...props }: Toggle03RightIconProps) {
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
      <path d="M21 12C21 9.23858 18.7614 7 16 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H16C18.7614 17 21 14.7614 21 12ZM17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5C16.8284 13.5 17.5 12.8284 17.5 12ZM19.5 12C19.5 13.933 17.933 15.5 16 15.5C14.067 15.5 12.5 13.933 12.5 12C12.5 10.067 14.067 8.5 16 8.5C17.933 8.5 19.5 10.067 19.5 12ZM23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5H16C19.866 5 23 8.13401 23 12Z" fill="currentColor"/>
    </svg>
  );
}

Toggle03RightIcon.displayName = "Toggle03RightIcon";
