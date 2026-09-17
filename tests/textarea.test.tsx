import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Field, Input, Textarea } from "../src";
import { boxOf, regionOf } from "./helpers";

const area = (container: HTMLElement) => container.querySelector("textarea") as HTMLTextAreaElement;

describe("Textarea", () => {
  it("renders a textarea rather than an input", () => {
    const { container } = render(<Textarea placeholder="Notes" />);
    expect(area(container).tagName).toBe("TEXTAREA");
  });

  it("takes the sheet's height per size", () => {
    // The sheets give the textarea 110px and 128px. The minimum sits on the
    // textarea, so it is that less the region's two 1px borders — and because a
    // resizable element honours it, the drag cannot go below the sheet's height.
    expect(area(render(<Textarea size="sm" />).container).className).toContain("min-h-[108px]");
    // and it fills whatever height the field ends up with, so the resize grip
    // stays at the field's corner when a layout stretches it
    expect(area(render(<Textarea size="sm" />).container).className).toContain("h-full");
    expect(area(render(<Textarea />).container).className).toContain("min-h-[126px]");
  });

  it("lets rows drop the minimum height so the field sizes natively", () => {
    const { container } = render(<Textarea rows={6} />);
    expect(area(container).rows).toBe(6);
    // and the minimum goes with it, so native sizing rules
    expect(area(container).className).not.toContain("min-h");
  });

  it("insets 14px at sm and 16px at md, where the input insets 12", () => {
    // The sheets inset the textarea two more than the input at each size. The
    // placeholder is the same string at both, so the 2px difference is real.
    // It lives on the textarea, so the textarea reaches the field's corner and
    // the resize grip is drawn where the sheet draws it.
    const sm = render(<Textarea size="sm" />);
    expect(area(sm.container).className).toContain("px-3.5");
    expect(area(sm.container).className).toContain("min-h-[108px]");
    const md = render(<Textarea />);
    expect(area(md.container).className).toContain("px-4");
    expect(area(md.container).className).toContain("min-h-[126px]");
    expect(regionOf(md.container).className).not.toContain("pl-4");
  });

  it("holds the text at 16px whichever size, as the sheets draw it", () => {
    // The sheets' placeholder glyph is byte-identical at sm and md, so the
    // textarea does not scale its text with the box the way the input does.
    expect(boxOf(render(<Textarea size="sm" />).container).className).toContain("text-base");
    expect(boxOf(render(<Textarea />).container).className).toContain("text-base");
  });

  it("paints the sheet's error border, not the destructive token", () => {
    // The sheets draw red-300 at rest and red-500 focused, the same pair the
    // input uses. This used to be border-destructive.
    const { container } = render(<Textarea error />);
    expect(regionOf(container).className).toContain("border-red-300");
    expect(regionOf(container).className).toContain("focus-within:outline-focus-error");
  });

  it("resizes vertically by default, and says so for consumers", () => {
    // The sheet draws a grip, and vertical is the direction that cannot move a
    // form's layout. The grip itself is the browser's, at the field's corner.
    const { container } = render(<Textarea />);
    expect(area(container).className).toContain("resize-y");
    expect(boxOf(container).getAttribute("data-resize")).toBe("vertical");
  });

  it("takes whichever direction it is given", () => {
    const cases = [
      ["none", "resize-none"],
      ["both", "resize"],
      ["horizontal", "resize-x"],
      ["vertical", "resize-y"],
    ] as const;
    for (const [resize, expected] of cases) {
      const { container } = render(<Textarea resize={resize} />);
      expect(area(container).className, resize).toContain(expected);
      expect(boxOf(container).getAttribute("data-resize"), resize).toBe(resize);
    }
  });

  it("leaves a single-line field alone", () => {
    // Resizing is a textarea concern, so a one-line field has no grip at all.
    const { container } = render(<Input />);
    expect(boxOf(container).className).not.toContain("resize");
    expect(boxOf(container).hasAttribute("data-resize")).toBe(false);
  });

  it("carries no help marker, as the sheet draws none", () => {
    const { container } = render(<Textarea />);
    expect(regionOf(container).querySelector("svg")).toBeNull();
  });

  it("fades the whole field when disabled", () => {
    // The sheet wraps the field, not the control, so the border fades too.
    const { container } = render(<Textarea disabled />);
    expect(boxOf(container).className).toContain("opacity-50");
    expect(area(container).disabled).toBe(true);
  });

  it("puts the caret in the text from a press on the field", () => {
    const { container } = render(<Textarea />);
    expect(fireEvent.mouseDown(regionOf(container))).toBe(false); // prevented
    expect(document.activeElement).toBe(area(container));
  });

  it("is wired by Field like any other control", () => {
    const { container } = render(
      <Field label="Notes" hint="Markdown is fine">
        <Textarea />
      </Field>,
    );
    const field = area(container);
    expect(field.id).not.toBe("");
    expect(screen.getByText("Notes").getAttribute("for")).toBe(field.id);
    expect(field.getAttribute("aria-describedby")).toBe(screen.getByText("Markdown is fine").id);
  });

  it("takes the error from Field and marks itself invalid", () => {
    const { container } = render(
      <Field label="Notes" error="Required">
        <Textarea />
      </Field>,
    );
    expect(area(container).getAttribute("aria-invalid")).toBe("true");
    expect(regionOf(container).className).toContain("border-red-300");
    expect(screen.getByRole("alert").textContent).toBe("Required");
  });

  it("passes the input-like helpers through unchanged", () => {
    const onChange = vi.fn();
    const { container } = render(<Textarea onChange={onChange} />);
    fireEvent.change(area(container), { target: { value: "hello" } });
    expect(onChange).toHaveBeenCalled();
    // one control, not an input and a textarea
    expect(container.querySelector("input")).toBeNull();
  });
});
