import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

/**
 * The label above a field.
 *
 * `Field` uses it and points it at the control with `htmlFor`. It is exported
 * for the case of labelling a control yourself.
 */
export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";
