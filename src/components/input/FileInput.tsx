import { useId, useState, type ChangeEvent } from "react";
import { cn } from "../../lib/cn";
import { Input, type InputProps } from "./Input";
import { Spinner } from "../display";

export type FileInputProps = Omit<
  InputProps,
  "type" | "value" | "defaultValue" | "onChange" | "trailing" | "attachedTrailing" | "readOnly"
> & {
  /**
   * Accepted file types, passed straight to the file input
   * @default undefined
   */
  accept?: string;

  /**
   * Permit more than one file
   * @default false
   */
  multiple?: boolean;

  /**
   * Runs with the next selection, as files rather than names
   * @default undefined
   */
  onFilesChange?: (files: File[]) => void;

  /**
   * Show a spinner in place of the file icon and block the action
   * @default false
   */
  loading?: boolean;

  /**
   * Runs when the help button is pressed. The button appears only when set
   * @default undefined
   */
  onHelpClick?: () => void;

  /**
   * Text of the action panel
   * @default "Browse"
   */
  actionLabel?: string;
};

/**
 * File picker in the shape of a field.
 * The value area shows the selected file names.
 * The action region is attached to the trailing edge, divided from the rest.
 * The file input itself is visually hidden but stays in the tab order, so the
 * label opens the picker and the field shows the focus outline.
 *
 * Focus rings the value area, not the whole field. That is what the sheet
 * draws: the hidden input lives inside the region so `focus-within` lands on
 * it, the action panel keeps its own border on the outside, and the divider's
 * line is the region's edge, which is the edge focus paints over.
 *
 * @example
 * <FileInput />
 *
 * @example
 * // One PDF, with the action busy while it uploads
 * <FileInput accept="application/pdf" loading />
 */
export function FileInput({
  accept,
  multiple,
  onFilesChange,
  loading = false,
  onHelpClick,
  actionLabel = "Browse",
  disabled,
  placeholder = "No file chosen",
  ...props
}: FileInputProps) {
  const id = useId();
  const [names, setNames] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    setNames(files.map((file) => file.name).join(", "));
    onFilesChange?.(files);
  }

  const blocked = disabled || loading;

  return (
    <Input
      readOnly
      disabled={disabled}
      value={names}
      placeholder={placeholder}
      onHelpClick={onHelpClick}
      trailing={
        <>
          {/* Lives in the value region, not the panel: the focus outline is
              drawn by the value region, so the focused control must be inside
              it. The label in the panel points here by id. */}
          <input
            id={id}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={blocked}
            onChange={handleChange}
            className="sr-only"
          />
          {/* The sheet shows the spinner beside the marker while uploading,
              not instead of it. The marker itself comes from Input. */}
          {loading && <Spinner size={16} className="text-focus" />}
        </>
      }
      attachedTrailing={
        <>
          <label
            htmlFor={id}
            className={cn(
              "flex h-full w-20 items-center justify-center px-3 text-sm font-medium transition-colors",
              blocked
                ? "cursor-not-allowed text-neutral-400"
                : "cursor-pointer text-neutral-700 hover:bg-neutral-50",
            )}
          >
            {actionLabel}
          </label>
        </>
      }
      {...props}
    />
  );
}
FileInput.displayName = "FileInput";
