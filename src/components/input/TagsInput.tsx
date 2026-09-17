import {
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "../../lib/cn";
import { XIcon } from "../icon/icons";
import { Input, type InputProps } from "./Input";

export type TagsInputProps = Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "leading" | "trailing"
> & {
  /**
   * The tags. Give this and `onValueChange` to control the field yourself
   * @default undefined
   */
  value?: string[];

  /**
   * The initial tags, for uncontrolled use
   * @default []
   */
  defaultValue?: string[];

  /**
   * Runs with the next set of tags whenever one is added or removed
   * @default undefined
   */
  onValueChange?: (tags: string[]) => void;

  /**
   * Where the tags render
   * @default "inside"
   * @option "inside" - chips in the field, which wrap or scroll
   * @option "below" - a row under the field, leaving the field its sheet height
   */
  chips?: "inside" | "below";

  /**
   * What the field does when the tags outgrow one line. Only applies to chips
   * inside
   * @default "wrap"
   * @option "wrap" - grows the box taller, a row at a time
   * @option "scroll" - holds the sheet height and scrolls the chips sideways,
   * revealing the newest tag as it arrives
   */
  overflow?: "wrap" | "scroll";

  /**
   * Stop accepting tags after this many
   * @default undefined
   */
  maxTags?: number;

  /**
   * Collect the tags in a textarea rather than a one-line field, which is the
   * sheets' textarea type for tags: taller, with the chips wrapping inside it
   * when they are inside, or sitting under it as usual when they are below
   * @default false
   */
  multiline?: boolean;

  /**
   * Cleans each tag as it is committed, before the empty and duplicate checks,
   * so a sanitised value that collides with an existing tag is still caught.
   * Use it to normalise a tag, or to bound a length a paste can carry in whole:
   * `maxLength` only caps what is typed into the field
   * @default undefined
   */
  sanitizeValue?: (value: string) => string;

  /**
   * Commit the half-typed tag when the field loses focus instead of dropping
   * it. Focus moving inside the field does not count, so pressing a chip's
   * remove button leaves the draft to finish
   * @default true
   */
  commitOnBlur?: boolean;
};

/**
 * One tag. Figma at md: 78px wide for "Design", 24px tall at every size, 6px
 * radius, 1px neutral-300 border, 10px left padding, 2px between the label and
 * the close glyph, and the glyph's centre 12px from the right edge. The label
 * and the glyph step down one size on sm.
 *
 * The sheet never draws a tag wider than its field, so a label that cannot fit
 * is capped and ellipsised rather than allowed to break out of the border
 * (MUI's Chip and Mantine's pill do the same). The label keeps the full text as
 * a title, since the ellipsis hides the end of it. The chip also refuses text
 * selection, which pairs with the field focusing on any press: Mantine marks
 * its pills the same way for the same reason.
 */
function Chip({
  label,
  size,
  disabled,
  onRemove,
}: {
  label: string;
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  onRemove: () => void;
}) {
  return (
    <span
      data-slot="tag"
      className="flex h-6 max-w-full shrink-0 items-center gap-0.5 rounded-sm border border-neutral-300 bg-background pr-1 pl-2.5 select-none"
    >
      <span
        title={label}
        className={cn("min-w-0 truncate text-neutral-700", size === "sm" ? "text-xs" : "text-sm")}
      >
        {label}
      </span>
      <button
        type="button"
        aria-label={`Remove ${label}`}
        disabled={disabled}
        onClick={onRemove}
        className="flex items-center text-neutral-600 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50"
      >
        <XIcon size={size === "sm" ? 12 : 16} />
      </button>
    </span>
  );
}

/**
 * Field that collects tags.
 *
 * Enter or comma commits the typed text, Backspace on an empty field removes the
 * last tag, and a paste splits on commas and newlines. Empty and duplicate tags
 * are dropped. The chips render inside the field or in a row below it; inside,
 * they wrap onto more lines or scroll sideways under the sheet height.
 *
 * @example
 * // Tags in the field, wrapping as they grow
 * <TagsInput placeholder="Add a skill" defaultValue={["react"]} />
 *
 * @example
 * // One row under the field, or one line that scrolls instead
 * <TagsInput chips="below" />
 * <TagsInput overflow="scroll" />
 *
 * @example
 * // Capped, with the message printed by Field
 * <Field label="Skills" error="Too many">
 *   <TagsInput maxTags={3} />
 * </Field>
 */
export function TagsInput({
  value,
  defaultValue = [],
  onValueChange,
  chips = "inside",
  overflow = "wrap",
  maxTags,
  multiline = false,
  sanitizeValue,
  size = "md",
  disabled,
  placeholder,
  onBlur,
  commitOnBlur = true,
  className,
  ...props
}: TagsInputProps) {
  const [uncontrolled, setUncontrolled] = useState<string[]>(defaultValue);
  const tags = value ?? uncontrolled;
  const [draft, setDraft] = useState("");
  const chipRow = useRef<HTMLSpanElement | null>(null);

  // Scroll mode puts the newest chip past the right edge of the strip, so bring
  // the row back to its end. Nothing to do while the row still fits.
  useEffect(() => {
    if (overflow !== "scroll") return;
    chipRow.current?.scrollIntoView?.({ inline: "end", block: "nearest" });
  }, [overflow, tags.length]);

  function commit(candidates: string[]) {
    const next = [...tags];
    for (const candidate of candidates) {
      const tag = (sanitizeValue ? sanitizeValue(candidate) : candidate).trim();
      if (!tag || next.includes(tag)) continue;
      if (maxTags !== undefined && next.length >= maxTags) break;
      next.push(tag);
    }
    if (next.length === tags.length) return;
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  }

  function remove(tag: string) {
    const next = tags.filter((item) => item !== tag);
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commit([draft]);
      setDraft("");
      return;
    }
    if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      event.preventDefault();
      remove(tags[tags.length - 1]);
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    onBlur?.(event);
    if (!commitOnBlur) return;
    // Commit only when focus leaves the field. Moving to a chip's remove button
    // keeps the draft on screen, so it is not lost and need not land yet.
    const next = event.relatedTarget as Node | null;
    const field = event.currentTarget.closest('[data-slot="box"]');
    if (next && field?.contains(next)) return;
    commit([draft]);
    setDraft("");
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    const text = event.clipboardData.getData("text");
    if (!/[\n,]/.test(text)) return;
    event.preventDefault();
    commit(text.split(/[\n,]+/));
    setDraft("");
  }

  const chipNodes = tags.map((tag) => (
    <Chip key={tag} label={tag} size={size} disabled={disabled} onRemove={() => remove(tag)} />
  ));

  // The scrolling strip scrolls its whole row, so the row carries the reveal.
  const inside =
    overflow === "scroll" ? (
      <span ref={chipRow} className="flex shrink-0 items-center gap-x-1.5">
        {chipNodes}
      </span>
    ) : (
      chipNodes
    );

  const field = (
    <Input
      disabled={disabled}
      size={size}
      // Chips inside pick how the line copes at the edge: wrap and the box
      // grows, scroll and the chips move sideways under the sheet height.
      overflow={chips === "inside" ? overflow : undefined}
      multiline={multiline}
      placeholder={tags.length === 0 ? placeholder : undefined}
      value={draft}
      onChange={(event) => setDraft(event.target.value)}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onBlur={handleBlur}
      leading={chips === "inside" ? inside : undefined}
      {...props}
    />
  );

  if (chips === "below") {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {field}
        {/* Sheet: the chips start flush with the field's border, 6px apart. */}
        {tags.length > 0 && <div className="flex flex-wrap items-center gap-1.5">{chipNodes}</div>}
      </div>
    );
  }

  return <div className={className}>{field}</div>;
}
TagsInput.displayName = "TagsInput";
