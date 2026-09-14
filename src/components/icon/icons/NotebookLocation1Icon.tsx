import type { SVGProps } from "react";

export type NotebookLocation1IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function NotebookLocation1Icon({ size = 24, ...props }: NotebookLocation1IconProps) {
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
      <path d="M5 18H22V19C22 21.761 19.761 24 17 24H5C3.343 24 2 22.657 2 21C2 19.343 3.343 18 5 18ZM14.121 5.379C14.687 5.945 15 6.698 15 7.5C15 8.302 14.688 9.055 14.129 9.613L12.367 11.337C12.164 11.536 11.835 11.534 11.633 11.337L9.879 9.621C9.313 9.055 9.001 8.302 9.001 7.5C9.001 6.698 9.313 5.945 9.879 5.379C10.446 4.813 11.199 4.5 12.001 4.5C12.803 4.5 13.555 4.812 14.121 5.379ZM13.5 7.5C13.5 6.672 12.828 6 12 6C11.172 6 10.5 6.672 10.5 7.5C10.5 8.328 11.172 9 12 9C12.828 9 13.5 8.328 13.5 7.5ZM22 5V16H5C3.927 16.039 2.859 16.37 2 17.025V4.973C2 2.229 4.224 0 6.967 0H17C19.761 0 22 2.239 22 5ZM17 7.5C17 6.164 16.479 4.909 15.535 3.965C14.591 3.021 13.335 2.5 12 2.5C10.665 2.5 9.409 3.021 8.464 3.965C7.519 4.909 7 6.164 7 7.5C7 8.836 7.52 10.091 8.472 11.043L10.234 12.767C10.721 13.244 11.36 13.482 12 13.482C12.64 13.482 13.279 13.244 13.766 12.767L15.536 11.036C16.48 10.093 17.001 8.837 17.001 7.501L17 7.5Z" fill="currentColor"/>
    </svg>
  );
}

NotebookLocation1Icon.displayName = "NotebookLocation1Icon";
