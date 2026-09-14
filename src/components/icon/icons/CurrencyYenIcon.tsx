import type { SVGProps } from "react";

export type CurrencyYenIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function CurrencyYenIcon({ size = 24, ...props }: CurrencyYenIconProps) {
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
      <path d="M11.0003 20.5V16.5H7.00027C6.44799 16.5 6.00027 16.0523 6.00027 15.5C6.00027 14.9478 6.44799 14.5 7.00027 14.5H11.0003V12.5H6.00027C5.44799 12.5 5.00027 12.0523 5.00027 11.5C5.00027 10.9478 5.44799 10.5 6.00027 10.5H9.89871L4.7239 4.1309C4.37565 3.70227 4.44081 3.07194 4.86941 2.72367C5.29804 2.37542 5.92837 2.44058 6.27664 2.86918L12.0003 9.91312L17.7239 2.86918C18.0722 2.44057 18.7025 2.37541 19.1311 2.72367C19.5597 3.07194 19.6249 3.70227 19.2766 4.1309L14.1018 10.5H18.0003C18.5525 10.5001 19.0003 10.9478 19.0003 11.5C19.0003 12.0523 18.5525 12.5 18.0003 12.5H13.0003V14.5H17.0003C17.5525 14.5001 18.0003 14.9478 18.0003 15.5C18.0003 16.0523 17.5525 16.5 17.0003 16.5H13.0003V20.5C13.0003 21.0523 12.5525 21.5 12.0003 21.5C11.448 21.5 11.0003 21.0523 11.0003 20.5Z" fill="currentColor"/>
    </svg>
  );
}

CurrencyYenIcon.displayName = "CurrencyYenIcon";
