import type { SVGProps } from "react";

export type Bold02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Bold02Icon({ size = 24, ...props }: Bold02IconProps) {
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
      <path d="M19.5 16C19.5 14.3431 18.1569 13 16.5 13H10.5V19H16.5C18.1569 19 19.5 17.6569 19.5 16ZM7 19H8.5V5H7V19ZM18.5 8C18.5 6.34315 17.1569 5 15.5 5H10.5V11H15.5C17.1569 11 18.5 9.65685 18.5 8ZM20.5 8C20.5 9.43116 19.8973 10.7204 18.9336 11.6318C20.4645 12.4866 21.5 14.1221 21.5 16C21.5 18.7614 19.2614 21 16.5 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H5V5H4C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3H15.5C18.2614 3 20.5 5.23858 20.5 8Z" fill="currentColor"/>
    </svg>
  );
}

Bold02Icon.displayName = "Bold02Icon";
