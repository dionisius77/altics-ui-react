import type { SVGProps } from "react";

export type Cloud01IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Cloud01Icon({ size = 24, ...props }: Cloud01IconProps) {
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
      <path d="M21 14.5C21 12.6778 19.6068 11.1794 17.8281 11.0146C17.4317 10.9779 17.1007 10.7116 16.9746 10.3447L16.9336 10.1816L16.8916 9.96094C16.4138 7.6984 14.4046 6 12 6C9.51785 6 7.45634 7.80973 7.06641 10.1816L7.02539 10.3447C6.89934 10.7116 6.56828 10.9779 6.17188 11.0146L6.08008 10.0195H6.0791L6.17188 11.0146C4.39322 11.1794 3 12.6778 3 14.5C3 16.433 4.567 18 6.5 18H17.5C19.433 18 21 16.433 21 14.5ZM23 14.5C23 17.5376 20.5376 20 17.5 20H6.5C3.46243 20 1 17.5376 1 14.5C1 11.8919 2.81476 9.70852 5.25098 9.14258C6.06524 6.17815 8.77672 4 12 4C15.2232 4 17.9337 6.17828 18.748 9.14258C21.1847 9.70818 23 11.8915 23 14.5Z" fill="currentColor"/>
    </svg>
  );
}

Cloud01Icon.displayName = "Cloud01Icon";
