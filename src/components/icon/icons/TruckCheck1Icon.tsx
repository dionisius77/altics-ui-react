import type { SVGProps } from "react";

export type TruckCheck1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function TruckCheck1Icon({ size = 24, ...props }: TruckCheck1IconProps) {
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
      <path d="M8.942 20C8.976 20.162 9 20.328 9 20.5C9 21.881 7.881 23 6.5 23C5.119 23 4 21.881 4 20.5C4 20.328 4.024 20.162 4.058 20H8.942ZM4 18C1.791 18 0 16.209 0 14V6C0 3.239 2.239 1 5 1H10C12.761 1 15 3.239 15 6V18H4ZM3.293 10.808L4.695 12.21C5.257 12.772 5.995 13.053 6.734 13.053C7.473 13.053 8.219 12.769 8.788 12.201L11.716 9.198C12.102 8.802 12.094 8.169 11.698 7.783C11.304 7.399 10.67 7.406 10.284 7.801L7.365 10.796C7.019 11.142 6.455 11.142 6.109 10.796L4.707 9.394C4.316 9.003 3.684 9.003 3.293 9.394C2.902 9.785 2.902 10.417 3.293 10.808ZM17 18H20C22.209 18 24 16.209 24 14V13H17V18ZM19 5H17V11H24V10C24 7.239 21.761 5 19 5ZM15.058 20C15.024 20.162 15 20.328 15 20.5C15 21.881 16.119 23 17.5 23C18.881 23 20 21.881 20 20.5C20 20.328 19.976 20.162 19.942 20H15.058Z" fill="currentColor"/>
    </svg>
  );
}

TruckCheck1Icon.displayName = "TruckCheck1Icon";
