import {
  forwardRef,
  useCallback,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "../../lib/cn";
import { AlertCircleIcon, HelpCircleIcon } from "../icon/icons";

/**
 * Horizontal rhythm per size, Figma: text 14px sm, 16px md and lg. The cap
 * height of the sheets' placeholder text settles it: 11.5px at md and lg,
 * 10.1px at sm, so md and lg share a size and sm is one step down.
 * `wrap*` is for content that can take more than one line. Inside, every item
 * is one chip tall, so a row is 24px plus the 6px gap and the box grows in
 * those steps. The padding is the sheet's chip inset, so a single row still
 * measures exactly the size height and the chips keep the same breathing room
 * once the box has grown. The inset is 6, 8 and 10 from the border box and the
 * region's own border accounts for 1px of it, hence 5, 7 and 9.
 * `scroll*` keeps the plain height and reserves a field wide enough to type in
 * while the rest of the line scrolls.
 * `cellBox` is for the verification sheet's display cell: the span that holds
 * it does the sizing, so the box fills rather than fixes its height, and the
 * digit is display-sized — 48px at sm and md, 60 at lg — rather than the
 * field's text size.
 */
const sizes = {
  sm: {
    box: "h-9 text-sm",
    wrapBox: "min-h-9 text-sm",
    wrapPad: "py-[5px]",
    // The sheets give the textarea two sizes and stop there, so lg borrows md's.
    multilineBox: "text-base",
    // Height and padding sit on the textarea, not the box, so its corner is the
    // field's corner: that is where the sheet draws the resize grip. A min-height
    // on a resizable element also bounds the drag, so the handle can never be
    // pulled inside the sheet's height.
    multilineInput: "h-full min-h-[108px] px-3.5 py-3",
    multilineRows: "h-full px-3.5 py-3",
    multilineInlineBox: "text-base min-h-[110px]",
    multilineInline: "h-full min-h-[84px]",
    // One display digit fills a 64px cell; the font, not the box, carries it.
    cellBox: "h-full text-5xl",
    // With chips sharing the line the region holds the inset and the floor, so
    // the textarea carries neither and stays as short as its content.
    trailingPad: "pr-9",
    input: "h-full min-w-0",
    wrapInput: "h-6 min-w-16",
    scrollInput: "h-full min-w-16",
  },
  md: {
    box: "h-10 text-base",
    wrapBox: "min-h-10 text-base",
    wrapPad: "py-[7px]",
    multilineBox: "text-base",
    multilineInput: "h-full min-h-[126px] px-4 py-3",
    multilineRows: "h-full px-4 py-3",
    multilineInlineBox: "text-base min-h-[128px]",
    multilineInline: "h-full min-h-[102px]",
    cellBox: "h-full text-5xl",
    trailingPad: "pr-10",
    input: "h-full min-w-0",
    wrapInput: "h-6 min-w-16",
    scrollInput: "h-full min-w-16",
  },
  lg: {
    box: "h-11 text-base",
    wrapBox: "min-h-11 text-base",
    wrapPad: "py-[9px]",
    multilineBox: "text-base",
    multilineInput: "min-h-[126px] px-4 py-3",
    multilineRows: "px-4 py-3",
    multilineInlineBox: "text-base min-h-[128px]",
    multilineInline: "min-h-[102px]",
    cellBox: "h-full text-6xl",
    trailingPad: "pr-11",
    input: "h-full min-w-0",
    wrapInput: "h-6 min-w-16",
    scrollInput: "h-full min-w-16",
  },
};

/** The resize utility for each mode, one class per property. */
const resizeClass = {
  none: "resize-none",
  both: "resize",
  horizontal: "resize-x",
  vertical: "resize-y",
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /**
   * Box height, and the text size that goes with it
   * @default "md"
   * @option "sm" - 36px tall, 14px text
   * @option "md" - 40px tall, 16px text
   * @option "lg" - 44px tall, 16px text
   */
  size?: "sm" | "md" | "lg";

  /**
   * Error state. `true` paints the sheet's red border, red-300 at rest and
   * red-500 once focused. A string does the same and `Field` prints the string
   * below the box
   * @default undefined
   */
  error?: string | boolean;

  /**
   * Content before the text: an icon, an affix, a dropdown or a stepper. Sits
   * on the region's 12px inset, or 8px when the content is chips
   * @default undefined
   */
  leading?: ReactNode;

  /**
   * Content after the text, on the same inset as `leading`. Its width is
   * reserved rather than taken from the line, so it cannot wrap or add height
   * @default undefined
   */
  trailing?: ReactNode;

  /**
   * Control attached to an edge. It spans the full height, sits flush with the
   * border and carries its own divider, so the region drops its padding and
   * leaves the content 12px from the panel. Used by the vertical number
   * counter and by the file upload action
   * @default undefined
   */
  attachedLeading?: ReactNode;

  /**
   * Attached control on the trailing edge. See `attachedLeading`
   * @default undefined
   */
  attachedTrailing?: ReactNode;

  /**
   * A 1px rule between an affix and the text. `true` draws both sides, an
   * object picks a side. The divider carries the 12px the sheet puts either
   * side of it
   * @default false
   * @option "true" - a separate part, such as the `https://` of a website field
   * @option "false" - part of the value, such as the `Rp` of a money field
   */
  divider?: boolean | { leading?: boolean; trailing?: boolean };

  /**
   * Alignment of the value and the placeholder
   * @default "left"
   * @option "left" - every type in the sheets but one
   * @option "center" - the horizontal number counter
   * @option "right" - no sheet asks for it; the class is there for consumers
   */
  textAlign?: "left" | "center" | "right";

  /**
   * What the box does when its content outgrows one line. A plain field holds
   * one line of text, so it leaves this out
   * @default undefined
   * @option "wrap" - trades the fixed height for a minimum and flows the
   * content onto more lines, growing a row at a time (24px plus the 6px gap)
   * @option "scroll" - keeps the sheet height and scrolls the content
   * sideways, leaving the text and the marker where they are
   */
  overflow?: "wrap" | "scroll";

  /**
   * Render a textarea rather than an input, with the sheets' textarea metrics:
   * taller, inset 16px rather than 12, text aligned to the top, and no help
   * marker. `Textarea` is the public face of this. The overflow modes describe
   * a line of chips, so they do not apply
   * @default false
   */
  multiline?: boolean;

  /**
   * Rows for the textarea. Passing it drops the sheet's minimum height, so the
   * field sizes natively and the resize handle can be dragged
   * @default undefined
   */
  rows?: number;

  /**
   * Which way the textarea can be dragged. The grip is the browser's, drawn at
   * the field's corner where the sheets draw it. Only applies to multiline
   * @default "vertical"
   * @option "none" - fixed, no grip
   * @option "vertical" - taller only, so a form's layout cannot move
   * @option "horizontal" - wider only
   * @option "both" - any direction, which can push a layout around
   */
  resize?: "none" | "both" | "horizontal" | "vertical";

  /**
   * Render the display cell the verification sheet draws: square, sized by the
   * parent, holding a display-sized digit. `PinInput` is the public face of
   * this. Like `multiline`, it exists so a family member keeps the base's
   * chrome — border, focus, error, disabled — without pushing the geometry
   * through `className`, which cannot resolve conflicts. The overflow modes
   * describe a line of chips, so they do not apply
   * @default false
   */
  cell?: boolean;

  /**
   * Show the trailing help marker
   * @default true
   * @option "true" - a question mark, or the same circle with an exclamation
   * mark in red-600 when the field is in error
   * @option "false" - for types whose trailing slot is taken, such as password
   * and the steppers. The tags sheet draws one, so TagsInput keeps it
   */
  helpIcon?: boolean;

  /**
   * Runs when the help marker is pressed
   * @default undefined
   */
  onHelpClick?: () => void;
};

/**
 * Text field with optional slots.
 *
 * The box draws no border of its own: the value region owns it, so focus can
 * paint over the border it belongs to, which is how the sheets draw focus.
 * `Field` supplies the label, the hint and the error message. Every other type
 * in this family builds on this one: Password, Number, File, OTP and Tags.
 *
 * The region also reports its state as `data-disabled`, `data-invalid` and
 * `data-overflow`, and a press anywhere inside it puts the caret in the text.
 *
 * @example
 * // Plain field, md by default
 * <Input placeholder="Email" />
 *
 * @example
 * // Affixes: a divider when the affix is a separate part, none when it
 * // belongs to the value
 * <Input leading="https://" divider={{ leading: true }} />
 * <Input leading="Rp" />
 *
 * @example
 * // A control that owns an edge, and brings its own divider
 * <Input attachedTrailing={<button>Browse</button>} />
 *
 * @example
 * // Error state; Field prints the message for you
 * <Field label="Email" error="Required">
 *   <Input />
 * </Field>
 *
 * @example
 * // Content that outgrows one line
 * <Input overflow="wrap" leading={chips} />
 * <Input overflow="scroll" leading={chips} />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "md",
      error,
      disabled,
      leading,
      trailing,
      attachedLeading,
      attachedTrailing,
      textAlign = "left",
      overflow,
      multiline = false,
      rows,
      resize = "vertical",
      cell = false,
      helpIcon = !multiline && !cell,
      onHelpClick,
      divider = false,
      "aria-invalid": invalid,
      ...props
    },
    ref,
  ) => {
    const invalidState = invalid ?? !!error;
    // The field keeps its own handle on the input, so a click anywhere in the
    // region can put the caret in the text without the caller having to hand a
    // ref back. Merged with the forwarded ref rather than replacing it.
    const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
    const setInputRef = useCallback(
      (node: HTMLInputElement | HTMLTextAreaElement | null) => {
        innerRef.current = node;
        // One callback serves both elements; each public component narrows the
        // ref it exposes, Textarea to a textarea and Input to an input.
        const asInput = node as HTMLInputElement | null;
        if (typeof ref === "function") {
          ref(asInput);
        } else if (ref) {
          ref.current = asInput;
        }
      },
      [ref],
    );
    // Both overflow modes keep the sheets' rhythm: a chip sits 8px in, the text
    // 12, chips are 6 apart and 8 from the text. They differ at the edge, so
    // they also need different slot handling below.
    const wraps = overflow === "wrap";
    const scrolls = overflow === "scroll" && !multiline;
    // A textarea with a slot on its line: the sheets draw the same field with
    // chips inside it, insetting the chips like they inset the text.
    const inlineMultiline = multiline && Boolean(leading);
    const showLeadingDivider =
      divider === true || (typeof divider === "object" && !!divider.leading);
    const showTrailingDivider =
      divider === true || (typeof divider === "object" && !!divider.trailing);

    // The trailing slot does not take its width from the line: the region
    // reserves it, so the slot can be positioned and the text still has an edge
    // to run to. Scroll mode is the exception, where the slot rides the
    // scrolling line, which is also what keeps it reachable.
    // A divided trailing slot leaves the region, so it reserves nothing there;
    // only what stays inside — the marker — does. Written from the props because
    // the edge table below reads this value.
    const reservesTrailing =
      Boolean((trailing && !showTrailingDivider) || helpIcon) && !attachedTrailing && !scrolls;

    // Everything one side of the field contributes, chosen in a single place:
    // the region's padding, the text's padding, the slot's gap to a panel, and
    // the corners on that side. Deriving all four from one state is what keeps
    // them from drifting apart — the slot margin and the region padding once
    // disagreed about who insets the content, and the marker sat 4px in. cn
    // joins without resolving conflicts, so a side must yield one class per
    // property: emitting `pr-3` and `pr-0` together silently kept `pr-3`.
    const edge = (side: "leading" | "trailing") => {
      const attached = side === "leading" ? attachedLeading : attachedTrailing;
      const hasSlot = side === "leading" ? Boolean(leading) : Boolean(trailing);
      const divider = side === "leading" ? showLeadingDivider : showTrailingDivider;
      // The sheet's inset from this edge, the gap the input leaves when a slot
      // has no divider, and the corners this side owns.
      // The sheets inset a textarea 14px at sm and 16px at md, against 12 for an
      // input at both of those sizes. That inset lives on the textarea itself, so
      // it reaches the field's corner, which is where the resize grip is drawn —
      // and the region holds back, or the text would be inset twice.
      const inset = cell
        ? // A cell centers its digit; an inset would push it off centre.
          side === "leading"
          ? "pl-0"
          : "pr-0"
        : multiline
        ? side === "leading"
          ? inlineMultiline
            ? size === "sm"
              ? "pl-3.5"
              : "pl-4"
            : "pl-0"
          : "pr-0"
        : side === "leading"
          ? "pl-3"
          : "pr-3";
      const slotGap = side === "leading" ? "pl-2" : "pr-2";
      const rounded = side === "leading" ? "rounded-l-md" : "rounded-r-md";
      const square = side === "leading" ? "rounded-l-none" : "rounded-r-none";

      // A slot behind a divider keeps its own edge, the way a panel does. The
      // region's border is then the rule between them, which is what the sheets
      // draw: focus takes the value area's edge and leaves the affix's border at
      // the resting colour instead of ringing the affix along with it. Behind an
      // attached panel the affix only needs its top and bottom, since the panel
      // already draws the outer edge.
      const affix =
        hasSlot && divider
          ? cn(
              "flex shrink-0 items-center gap-2 self-stretch border-y pr-3 pl-3 text-neutral-600",
              !attached && (side === "leading" ? "rounded-l-md border-l" : "rounded-r-md border-r"),
            )
          : null;

      // A panel owns the edge: it draws the border there and meets the content
      // 12px in, so the region gives its padding up and its corners square off.
      if (attached) {
        return {
          affix,
          region: side === "leading" ? "pl-0" : "pr-0",
          input: inset,
          slot: side === "leading" ? "ml-3" : null,
          rounding: square,
        };
      }
      if (side === "trailing" && reservesTrailing) {
        // The reservation is the marker's space, not the corners: an affix
        // panel on that edge still owns them.
        return {
          affix,
          region: sizes[size].trailingPad,
          input: undefined,
          slot: null,
          rounding: affix ? square : rounded,
        };
      }
      // The divided slot sits outside, so the region keeps the sheet's inset for
      // its own text and squares off where the affix panel meets it.
      if (affix) {
        return { affix, region: inset, input: undefined, slot: null, rounding: square };
      }
      return {
        affix,
        // Overflow content lines up on the chip inset rather than the text one,
        // and an empty tags field keeps its placeholder 2px further in, on the
        // input below.
        region: side === "leading" && !multiline && (wraps || scrolls) ? "pl-2.5" : inset,
        // Without a divider the input leaves the gap to the text; with one, the
        // divider owns that gap.
        input: hasSlot && !divider ? slotGap : undefined,
        slot: null,
        rounding: rounded,
      };
    };
    const leadingEdge = edge("leading");
    const trailingEdge = edge("trailing");
    // Borders belong to the regions, not the box. The value region then owns
    // the border its focus outline paints over, which is how the sheets make
    // focus replace the border instead of sitting beside it. With a panel, the
    // region's inner edge is the divider.
    const borderColour = error ? "border-red-300" : "border-neutral-300";

    return (
      <div
        data-slot="box"
        onMouseDown={(event) => {
          // A press anywhere in the field puts the caret in the text, except on
          // the text itself — that would take away placing the caret and
          // dragging to select — and inside an attached panel, which drives
          // itself. The file picker's label opens the picker, for one.
          if (disabled || event.target === innerRef.current) return;
          if ((event.target as Element).closest('[data-slot="panel"]')) return;
          event.preventDefault();
          innerRef.current?.focus();
        }}
        // State for consumers to style on, in the shape React Aria and Mantine
        // use: the attribute appears only while the state holds. aria-invalid
        // stays on the input, where assistive technology reads it.
        data-disabled={disabled || undefined}
        data-invalid={invalidState || undefined}
        data-overflow={overflow}
        data-resize={multiline ? resize : undefined}
        className={cn(
          // No border here: each region draws its own, so focus can paint over
          // the one it owns.
          "flex items-center rounded-md bg-background transition-colors",
          // The cell's span does the sizing, so the box must not also insist on
          // w-full: cn joins without resolving, and two width classes leave the
          // outcome to Tailwind's stylesheet order.
          !cell && "w-full",
          cell
            ? sizes[size].cellBox
            : inlineMultiline
              ? sizes[size].multilineInlineBox
              : wraps
                ? sizes[size].wrapBox
                : multiline
                  ? rows === undefined
                    ? sizes[size].multilineBox
                    : undefined
                  : sizes[size].box,
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        {attachedLeading && (
          <span
            data-slot="panel"
            className={cn(
              "flex shrink-0 self-stretch rounded-l-md border-y border-l",
              borderColour,
            )}
          >
            {attachedLeading}
          </span>
        )}
        {leadingEdge.affix && (
          <span data-slot="affix" className={cn(leadingEdge.affix, borderColour)}>
            {leading}
          </span>
        )}
        {/* The value region carries the focus decoration, not the box: the
            sheets ring only the value area and drop the divider on focus.
            self-stretch is what makes the region fill the box: without it the
            region is only as tall as its text, and the outline becomes a thin
            band around the line instead of the whole input block. */}
        <span
          data-slot="value"
          className={cn(
            "relative flex min-w-0 flex-1 self-stretch border",
            multiline ? "items-start" : "items-center",
            // Sheet, in px from the field's edge: a chip sits 8 in, the text
            // 12, chips are 6 apart and 8 from the text. Chips and text share
            // one line in both modes, so the chips switch the region to their
            // own inset and the text's extra 2px rides on the input below.
            (wraps || scrolls) && "gap-x-1.5 has-[[data-slot=tag]]:pl-2",
            wraps && cn("flex-wrap gap-y-1.5", inlineMultiline ? "py-3" : sizes[size].wrapPad),
            inlineMultiline &&
              (size === "sm" ? "has-[[data-slot=tag]]:pl-2.5" : "has-[[data-slot=tag]]:pl-3"),
            borderColour,
            leadingEdge.rounding,
            trailingEdge.rounding,
            leadingEdge.region,
            trailingEdge.region,
            "focus-within:outline focus-within:outline-2 focus-within:outline-offset-[-2px]",
            error ? "focus-within:outline-focus-error" : "focus-within:outline-focus",
          )}
        >
          {leading && !leadingEdge.affix && (
            <span
              className={cn(
                // Wrap mode dissolves the slot: a slot is one un-wrappable box,
                // so it would overflow whole instead of flowing onto the next
                // line with the text.
                wraps
                  ? "contents"
                  : cn(
                      "flex items-center text-neutral-600",
                      // Scroll mode makes the slot the strip that moves. It
                      // shrinks and clips its own content, so the sheet height
                      // holds and the text and the marker stay put and clickable
                      // however many chips there are. The bar itself is hidden:
                      // it would eat half of a 40px field.
                      scrolls
                        ? cn(
                            "min-w-0 gap-x-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            // The line dissolves toward the field's edge instead
                            // of stopping at a hard cut.
                            "[mask-image:linear-gradient(to_right,black_calc(100%-28px),transparent)]",
                          )
                        : cn(
                            "shrink-0 gap-2",
                            // The sheets put 12px between a panel and the
                            // content beside it. Without a panel the region's
                            // padding is the inset, so the slot adds nothing.
                            leadingEdge.slot,
                          ),
                    ),
              )}
            >
              {leading}
            </span>
          )}
          {multiline ? (
            <textarea
              ref={setInputRef as unknown as Ref<HTMLTextAreaElement>}
              rows={rows}
              disabled={disabled}
              aria-invalid={invalidState}
              className={cn(
                "min-w-0 flex-1 bg-transparent text-foreground placeholder:text-placeholder focus:outline-none disabled:cursor-not-allowed",
                resizeClass[resize],
                inlineMultiline
                  ? sizes[size].multilineInline
                  : rows === undefined
                    ? sizes[size].multilineInput
                    : sizes[size].multilineRows,
                leadingEdge.input,
                trailingEdge.input,
                textAlign === "center" && "text-center",
                textAlign === "right" && "text-right",
              )}
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={setInputRef as Ref<HTMLInputElement>}
              disabled={disabled}
              aria-invalid={invalidState}
              className={cn(
                "flex-1 bg-transparent text-foreground placeholder:text-placeholder focus:outline-none disabled:cursor-not-allowed",
                wraps
                  ? sizes[size].wrapInput
                  : scrolls
                    ? sizes[size].scrollInput
                    : sizes[size].input,
                // Sheet: 8px from the last chip to the text, against a 6px chip
                // gap, so the text carries the extra 2px.
                (wraps || scrolls) && "ml-0.5",
                leadingEdge.input,
                trailingEdge.input,
                textAlign === "center" && "text-center",
                textAlign === "right" && "text-right",
              )}
              {...props}
            />
          )}
          {((trailing && !trailingEdge.affix) || helpIcon) && (
            <span
              className={cn(
                // Out of the flow, so a trailing adornment cannot wrap onto a
                // row of its own or add height to the box; the region reserves
                // its width instead. Positioned 12px in, which is also the
                // sheet's gap when a panel sits on that edge.
                scrolls
                  ? "flex shrink-0 items-center gap-2"
                  : "absolute inset-y-0 right-3 flex items-center gap-2",
                error ? "text-red-600" : "text-neutral-400",
              )}
            >
              {!trailingEdge.affix && trailing}
              {helpIcon && <HelpMarker error={!!error} disabled={disabled} onClick={onHelpClick} />}
            </span>
          )}
        </span>
        {trailingEdge.affix && (
          <span data-slot="affix" className={cn(trailingEdge.affix, borderColour)}>
            {trailing}
          </span>
        )}
        {attachedTrailing && (
          <span
            data-slot="panel"
            className={cn(
              "flex shrink-0 self-stretch rounded-r-md border-y border-r",
              borderColour,
            )}
          >
            {attachedTrailing}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

/**
 * Trailing help marker: a question mark at rest, and the same circle with an
 * exclamation mark in red-600 once the field is in error. The sheet draws it
 * 16px with a 12px inset, which the region reserves.
 *
 * Decorative while it has no handler, so assistive technology skips it. Give
 * it `onHelpClick` and it becomes a real button instead.
 */
function HelpMarker({
  error,
  disabled,
  onClick,
}: {
  error: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const Glyph = error ? AlertCircleIcon : HelpCircleIcon;
  const colour = error ? "text-red-600" : "text-neutral-400";

  if (!onClick) return <Glyph size={16} className={cn("shrink-0", colour)} />;

  return (
    <button
      type="button"
      aria-label="Help"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-sm transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50",
        colour,
      )}
    >
      <Glyph size={16} />
    </button>
  );
}
