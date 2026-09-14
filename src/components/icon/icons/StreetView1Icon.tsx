import type { SVGProps } from "react";

export type StreetView1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function StreetView1Icon({ size = 24, ...props }: StreetView1IconProps) {
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
      <g clipPath="url(#StreetView1Icon-clip0_13426_12058)">
<path d="M9.5 2.5C9.5 1.119 10.619 0 12 0C13.381 0 14.5 1.119 14.5 2.5C14.5 3.881 13.381 5 12 5C10.619 5 9.5 3.881 9.5 2.5ZM7 12V10C7 7.794 8.794 6 11 6H13C15.206 6 17 7.794 17 10V12C17 13.304 16.164 14.416 15 14.829V19C15 19.552 14.553 20 14 20C13.447 20 13 19.552 13 19V15H11V19C11 19.552 10.553 20 10 20C9.447 20 9 19.552 9 19V14.829C7.836 14.416 7 13.304 7 12ZM18.203 15.587C17.907 15.526 17.602 15.601 17.369 15.791C17.136 15.98 17 16.266 17 16.566V18.938C17 20.501 15.802 21.827 14.243 21.929C13.542 21.975 12.794 22 12 22C11.206 22 10.458 21.975 9.757 21.929C8.197 21.827 7 20.502 7 18.938V16.566C7 16.265 6.864 15.98 6.631 15.791C6.399 15.601 6.091 15.526 5.797 15.587C2.059 16.362 0 17.752 0 19.5C0 22.592 6.221 24 12 24C17.779 24 24 22.592 24 19.5C24 17.752 21.941 16.362 18.203 15.587Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="StreetView1Icon-clip0_13426_12058">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

StreetView1Icon.displayName = "StreetView1Icon";
