import { forwardRef, type Ref, type TextareaHTMLAttributes } from "react";
import { Input, type InputProps } from "./Input";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * Box height, from the sheets. The textarea ships two sizes and stops there
   * @default "md"
   * @option "sm" - 110px tall
   * @option "md" - 128px tall
   */
  size?: "sm" | "md";

  /**
   * Which way the field can be dragged. The grip is the browser's, at the
   * field's corner where the sheets draw it
   * @default "vertical"
   * @option "none" - fixed, no grip
   * @option "vertical" - taller only, so a form's layout cannot move
   * @option "horizontal" - wider only
   * @option "both" - any direction, which can push a layout around
   */
  resize?: "none" | "both" | "horizontal" | "vertical";

  /**
   * Error state. `true` paints the border in the error colour, red-300 at rest
   * and red-500 once focused; a string does the same and `Field` prints the
   * string below the box
   * @default undefined
   */
  error?: string | boolean;
};

/**
 * Multi-line text box.
 *
 * The same chrome as `Input` — border, radius, focus outline, error colours and
 * the `Field` wiring — from the same base, with the sheets' textarea metrics on
 * top: taller, inset 14px at sm and 16px at md, text aligned to the top and
 * held at 16px at both sizes, and no help marker.
 *
 * A minimum height of 110px (sm) or 128px (md) applies by default, so the field
 * matches the sheet, and the text scrolls inside it as a textarea does. Pass
 * `rows` to drop the minimum and size natively, or drag the resize handle.
 *
 * To set the height from outside, use `style`. A `className` will not reliably
 * win: cn joins without resolving conflicts, so Tailwind source order decides.
 *
 * @example
 * <Textarea placeholder="Notes" />
 *
 * @example
 * // Native sizing rather than the sheet's minimum
 * <Textarea rows={6} />
 *
 * @example
 * <Field label="Notes" hint="Markdown is fine">
 *   <Textarea rows={4} />
 * </Field>
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size = "md", ...props }, ref) => (
    // The base types its ref and props as an input, since that is its other
    // element. The element fork inside narrows both back for a textarea.
    <Input multiline size={size} ref={ref as Ref<HTMLInputElement>} {...(props as InputProps)} />
  ),
);
Textarea.displayName = "Textarea";
