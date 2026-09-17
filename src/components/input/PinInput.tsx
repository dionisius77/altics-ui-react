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

/** The verification sheet draws square cells, one step per size (64, 80 and
 * 96) on gaps of 8 and 12; the display-sized digit itself lives in the base's
 * cell mode. The span sizes the field and the box fills it. */
const cellBox = { sm: "w-16 h-16", md: "w-20 h-20", lg: "w-24 h-24" };
const cellGap = { sm: "gap-2", md: "gap-3", lg: "gap-3" };

export type PinInputProps = {
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
   * What the empty cells show, in the placeholder grey the sheets draw their
   * digits in. The active cell stays empty so the caret has a clear slot
   * @default "0"
   */
  placeholder?: string;

  /**
   * Name for native form submission
   * @default undefined
   */
  name?: string;

  /**
   * Accessible name for the field
   * @default "Pin"
   */
  label?: string;

  /**
   * Extra classes for the row of cells
   * @default undefined
   */
  className?: string;
};

/**
 * Pin entry.
 *
 * There is exactly one real input, laid over the row and invisible. The cells
 * are mirrors of its value, so typing, Backspace, arrow keys, drag selection,
 * paste and SMS autofill are all the browser's job. Managing N inputs by hand
 * is what makes these fields feel flaky.
 *
 * The cells are the verification sheet's: square, one step per size, holding a
 * display-sized digit, and empty ones show the placeholder digit in the grey
 * the sheet draws it in. The active one draws the focus outline, taken from
 * the same Input chrome as every other field, so the sheets' looks are
 * unchanged.
 *
 * @example
 * <PinInput />
 *
 * @example
 * // Six letters, reported once the last cell is filled
 * <PinInput length={6} type="alphanumeric" onComplete={submit} />
 */
export function PinInput({
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
  placeholder = "0",
  name,
  label = "Pin",
  className,
}: PinInputProps) {
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
      data-slot="pin"
      data-focused={focused || undefined}
      className={cn("relative flex items-center", cellGap[size], className)}
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
            data-slot="pin-cell"
            data-active={active || undefined}
            className={cn("block", cellBox[size])}
          >
            <Input
              size={size}
              cell
              error={error}
              disabled={disabled}
              readOnly
              tabIndex={-1}
              helpIcon={false}
              textAlign="center"
              value={char}
              placeholder={active ? "" : placeholder}
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
PinInput.displayName = "PinInput";
