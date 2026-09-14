import type { SVGProps } from "react";

export type Warehouse21IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Warehouse21Icon({ size = 24, ...props }: Warehouse21IconProps) {
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
      <g clipPath="url(#Warehouse21Icon-clip0_13426_12029)">
<path d="M8.579 15H15.421L12 17.799L8.579 15ZM16.421 24L12 20.383L7.579 24H16.421ZM13.579 19.091L17 21.89V16.292L13.579 19.091ZM24 10.645V19C24 21.757 21.757 24 19 24V16C19 14.346 17.654 13 16 13H8C6.346 13 5 14.346 5 16V24C2.243 24 0 21.757 0 19V10.645C0 9.85297 0.232 9.08496 0.672 8.42596L3.673 3.92297C4.105 3.27596 4.711 2.77196 5.425 2.46496L10.424 0.323965C11.425 -0.106035 12.574 -0.106035 13.576 0.323965L18.574 2.46597C19.289 2.77296 19.895 3.27696 20.326 3.92396L23.327 8.42596C23.766 9.08496 24 9.85196 24 10.645ZM15 6.99996C15 5.34596 13.654 3.99996 12 3.99996C10.346 3.99996 9 5.34596 9 6.99996C9 8.65396 10.346 9.99996 12 9.99996C13.654 9.99996 15 8.65396 15 6.99996ZM12 5.99996C11.449 5.99996 11 6.44896 11 6.99996C11 7.55096 11.449 7.99996 12 7.99996C12.551 7.99996 13 7.55096 13 6.99996C13 6.44896 12.551 5.99996 12 5.99996ZM7 16.292V21.89L10.421 19.091L7 16.292Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="Warehouse21Icon-clip0_13426_12029">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

Warehouse21Icon.displayName = "Warehouse21Icon";
