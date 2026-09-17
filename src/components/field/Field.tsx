import {
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useId,
  useRef,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "../../lib/cn";
import { Label } from "./Label";

/**
 * Field wires its child by cloning it, so the child must be a component that
 * forwards `id`, `aria-describedby` and the error and required flags. Text, a
 * fragment, or a host element such as a plain `<input>` takes none of them,
 * which would leave the label pointing at nothing without saying so.
 */
function canWire(children: ReactNode) {
  return (
    isValidElement(children) && typeof children.type !== "string" && children.type !== Fragment
  );
}

/** Warns once per mount, in development only. */
function useDevWarning(condition: boolean, message: string) {
  const warned = useRef(false);
  useEffect(() => {
    if (!import.meta.env.DEV || !condition || warned.current) return;
    warned.current = true;
    console.warn(message);
  }, [condition, message]);
}

export type FieldProps = Omit<HTMLAttributes<HTMLDivElement>, "label"> & {
  /**
   * Text above the control
   * @default undefined
   */
  label?: ReactNode;

  /**
   * Mark the control required and draw the asterisk beside the label
   * @default undefined
   */
  required?: boolean;

  /**
   * Help text under the control. Hidden while `error` has something to say
   * @default undefined
   */
  hint?: ReactNode;

  /**
   * Error message. A string paints the control's error border and prints the
   * message under it
   * @default undefined
   */
  error?: string | false | null;

  /**
   * The control. Field clones it to set `id`, `aria-describedby`, `error` and
   * `required`, so it must be a component that forwards those
   * @default undefined
   */
  children: ReactNode;
};

/**
 * Label, control, and one message under it.
 *
 * Field wires the pieces itself: it gives the control an id, points the label
 * at it, and describes it with the hint, or with the error while one is set. A
 * control that sets its own `error` or `required` keeps them.
 *
 * It wires the child by cloning it, so the child has to be a component that
 * forwards `id`, `aria-describedby`, `error` and `required`. Anything else —
 * text, a fragment, a plain `<input>` — leaves the label pointing at nothing,
 * which is why it warns in development.
 *
 * @example
 * <Field label="Email" hint="We never share it">
 *   <Input type="email" />
 * </Field>
 *
 * @example
 * // The error replaces the hint and marks the control invalid
 * <Field label="Email" error="Required">
 *   <Input />
 * </Field>
 */
export function Field({ label, required, hint, error, children, className, ...props }: FieldProps) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const messageId = error ? errorId : hint ? hintId : undefined;

  const wireable = canWire(children);
  useDevWarning(
    !wireable,
    "Field needs a child it can wire: it clones the child to set id, aria-describedby, error and required. Pass a component such as Input rather than text, a fragment, or a plain element.",
  );

  const childProps = (children as ReactElement<Record<string, unknown>>)?.props;
  const describedBy = [childProps?.["aria-describedby"], messageId].filter(Boolean).join(" ");

  const child = wireable
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id: (children as ReactElement<Record<string, unknown>>).props.id ?? id,
        ...(error !== undefined &&
        (children as ReactElement<Record<string, unknown>>).props.error === undefined
          ? { error }
          : null),
        ...(required &&
        (children as ReactElement<Record<string, unknown>>).props.required === undefined
          ? { required: true }
          : null),
        ...(describedBy ? { "aria-describedby": describedBy } : null),
      })
    : children;
  return (
    <div className={cn("flex flex-col gap-md", className)} {...props}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && (
            <span aria-hidden="true" className="text-primary">
              {" *"}
            </span>
          )}
        </Label>
      )}
      {child}
      {error ? (
        <p id={errorId} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
Field.displayName = "Field";
