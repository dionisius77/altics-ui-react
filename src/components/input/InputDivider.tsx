import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

/**
 * Vertical separator between an affix and the text.
 * The separator spans the full height of the box.
 * The margin is the sheet's gap: in `Leading text` md the affix ends at 65.9,
 * the divider sits at 79.5 and the text starts at 91.3, so roughly 12 either
 * side. The divider carries it because the slot no longer does.
 */
export function InputDivider({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      data-slot="divider"
      className={cn("mx-3 h-full w-px shrink-0 bg-neutral-300", className)}
      {...props}
    />
  );
}
InputDivider.displayName = "InputDivider";
