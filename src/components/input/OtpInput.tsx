import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import { cn } from "../../lib/cn";
import { Input, type InputProps } from "./Input";

/** Cells are square, one step per size, on the usual 8px gap. */
const cellWidth = { sm: "w-9", md: "w-10", lg: "w-11" };

export type OtpInputProps = {
  /**
   * Number of cells. The sheets draw four
   * @default 4
   */
  length?: number;

  /**
   * The code. Give this and `onValueChange` to control the field yourself
   * @default undefined
   */
  value?: string;

  /**
   * The initial code, for uncontrolled use
   * @default ""
   */
  defaultValue?: string;

  /**
   * Runs with the next code on every keystroke
   * @default undefined
   */
  onValueChange?: (value: string) => void;

  /**
   * Runs once, when the last cell is filled
   * @default undefined
   */
  onComplete?: (value: string) => void;

  /**
   * Cell size, following the field sizes
   * @default "md"
   */
  size?: InputProps["size"];

  /**
   * Error state, painted like every other field
   * @default undefined
   */
  error?: string | boolean;

  /**
   * Block editing; the cells fade like every other disabled field
   * @default undefined
   */
  disabled?: boolean;

  /**
   * Keep the code readable but not editable
   * @default undefined
   */
  readOnly?: boolean;

  /**
   * Focus the field on mount
   * @default undefined
   */
  autoFocus?: boolean;

  /**
   * What the cells accept
   * @default "numeric"
   * @option "numeric" - digits only
   * @option "alphanumeric" - letters as well
   */
  type?: "numeric" | "alphanumeric";

  /**
   * Name for native form submission
   * @default undefined
   */
  name?: string;

  /**
   * Accessible name for the field
   * @default "One-time code"
   */
  label?: string;

  /**
   * Extra classes for the row of cells
   * @default undefined
   */
  className?: string;
};

/**
 * One-time code entry.
 *
 * There is exactly one real input, laid over the row and invisible. The cells
 * are mirrors of its value, so typing, Backspace, arrow keys, drag selection,
 * paste and SMS autofill are all the browser's job. Managing N inputs by hand
 * is what makes these fields feel flaky.
 *
 * The active cell draws the focus outline, taken from the same Input chrome as
 * every other field, so the sheets' focused look is unchanged.
 *
 * @example
 * <OtpInput />
 *
 * @example
 * // Six letters, reported once the last cell is filled
 * <OtpInput length={6} type="alphanumeric" onComplete={submit} />
 */
export function OtpInput({
  length = 4,
  value,
  defaultValue = "",
  onValueChange,
  onComplete,
  size = "md",
  error,
  disabled,
  readOnly,
  autoFocus,
  type = "numeric",
  name,
  label = "One-time code",
  className,
}: OtpInputProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const code = (value ?? uncontrolled).slice(0, length);
  const [range, setRange] = useState({ start: code.length, end: code.length });
  const [focused, setFocused] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const cells = useRef<Array<HTMLSpanElement | null>>([]);
  const wasComplete = useRef(code.length === length);

  function keep(text: string) {
    return type === "numeric" ? text.replace(/\D/g, "") : text.replace(/[^a-zA-Z0-9]/g, "");
  }

  /** The caret can never sit past the code, and the slots follow it. */
  function syncSelection() {
    const el = input.current;
    if (!el) return;
    const start = Math.min(el.selectionStart ?? code.length, code.length);
    const end = Math.min(el.selectionEnd ?? start, code.length);
    if (el.selectionStart !== start || el.selectionEnd !== end) el.setSelectionRange(start, end);
    setRange((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  }

  useLayoutEffect(syncSelection);

  useEffect(() => {
    if (autoFocus) input.current?.focus();
  }, [autoFocus]);

  function commit(next: string) {
    const trimmed = keep(next).slice(0, length);
    if (value === undefined) setUncontrolled(trimmed);
    onValueChange?.(trimmed);

    const complete = trimmed.length === length;
    if (complete && !wasComplete.current) onComplete?.(trimmed);
    wasComplete.current = complete;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    commit(event.target.value);
  }

  /** Clicking a cell puts the caret there, since the hidden input has no mapping of its own. */
  function handlePointerDown(event: MouseEvent<HTMLInputElement>) {
    const el = input.current;
    if (!el || disabled || readOnly) return;
    event.preventDefault();
    let index = code.length;
    for (let i = 0; i < length; i += 1) {
      const rect = cells.current[i]?.getBoundingClientRect();
      // Whichever cell the pointer is inside wins; past the last one means the end.
      if (rect && event.clientX < rect.right) {
        index = i;
        break;
      }
    }
    el.focus();
    el.setSelectionRange(index, index);
    setRange({ start: index, end: index });
  }

  return (
    <div
      data-slot="otp"
      data-focused={focused || undefined}
      className={cn("relative flex items-center gap-2", className)}
    >
      {Array.from({ length }, (_, index) => {
        const char = code[index] ?? "";
        const active = focused && range.start === range.end && index === range.start;
        return (
          <span
            key={index}
            ref={(node) => {
              cells.current[index] = node;
            }}
            aria-hidden="true"
            data-slot="otp-cell"
            data-active={active || undefined}
            className={cn("block", cellWidth[size ?? "md"])}
          >
            <Input
              size={size}
              error={error}
              disabled={disabled}
              readOnly
              tabIndex={-1}
              helpIcon={false}
              textAlign="center"
              value={char}
              onChange={() => {}}
              className={cn(
                active && "outline outline-2 outline-offset-[-2px]",
                active && (error ? "outline-focus-error" : "outline-focus"),
              )}
            />
          </span>
        );
      })}
      <input
        ref={input}
        name={name}
        value={code}
        disabled={disabled}
        readOnly={readOnly}
        aria-label={label}
        aria-invalid={error ? true : undefined}
        inputMode={type === "numeric" ? "numeric" : "text"}
        autoComplete="one-time-code"
        pattern={type === "numeric" ? "\\d*" : undefined}
        maxLength={length}
        onChange={handleChange}
        onMouseDown={handlePointerDown}
        onSelect={syncSelection}
        onClick={syncSelection}
        onKeyUp={syncSelection}
        onFocus={() => {
          setFocused(true);
          syncSelection();
        }}
        onBlur={() => setFocused(false)}
        // Invisible, but real: the browser keeps caret, selection, paste and autofill.
        className="absolute inset-0 h-full w-full cursor-text text-base opacity-0 outline-none"
      />
    </div>
  );
}
OtpInput.displayName = "OtpInput";
