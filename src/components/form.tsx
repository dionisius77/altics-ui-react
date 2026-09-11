import {
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "../lib/cn";
const field =
  "flex w-full rounded-md border border-input px-3 py-2 text-sm text-primary placeholder:text-placeholder focus:focus-ring outline-none disabled:cursor-not-allowed disabled:opacity-50";
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, "aria-invalid": invalid, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid ?? error}
      className={cn(field, "h-10", error && "border-destructive", className)}
      {...props}
    />
  ),
);
Input.displayName = "Input";
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, "aria-invalid": invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid ?? error}
      className={cn(
        field,
        "min-h-24",
        error && "border-destructive",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
export const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";
