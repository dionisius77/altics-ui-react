import type { SVGProps } from "react";

export type DotCircle1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function DotCircle1Icon({ size = 24, ...props }: DotCircle1IconProps) {
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
      <g clipPath="url(#DotCircle1Icon-clip0_13426_12049)">
<path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="DotCircle1Icon-clip0_13426_12049">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

DotCircle1Icon.displayName = "DotCircle1Icon";
