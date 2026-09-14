import type { SVGProps } from "react";

export type Attachment02IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Attachment02Icon({ size = 24, ...props }: Attachment02IconProps) {
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
      <path d="M9.16699 16.4453V6.65137C9.16699 6.09908 9.61471 5.65137 10.167 5.65137C10.7191 5.65154 11.167 6.09919 11.167 6.65137V16.4453C11.167 16.9055 11.5398 17.2793 12 17.2793C12.4602 17.2793 12.833 16.9055 12.833 16.4453V5.66699C12.833 4.19434 11.6396 3.00018 10.167 3C8.69423 3 7.5 4.19423 7.5 5.66699V16.5C7.5 18.9853 9.51472 21 12 21C14.4853 21 16.5 18.9853 16.5 16.5V5.25586C16.5 4.70357 16.9477 4.25586 17.5 4.25586C18.0523 4.25586 18.5 4.70357 18.5 5.25586V16.5C18.5 20.0899 15.5898 23 12 23C8.41015 23 5.5 20.0899 5.5 16.5V5.66699C5.5 3.08966 7.58966 1 10.167 1C12.7442 1.00018 14.833 3.08977 14.833 5.66699V16.4453C14.833 18.0101 13.5648 19.2793 12 19.2793C10.4352 19.2793 9.16699 18.0101 9.16699 16.4453Z" fill="currentColor"/>
    </svg>
  );
}

Attachment02Icon.displayName = "Attachment02Icon";
