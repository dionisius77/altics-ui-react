import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { PinInput } from "../src";

/** The one real input; the mirror cells also contain an input each. */
const field = (container: HTMLElement) =>
  container.querySelector("input[aria-label]") as HTMLInputElement;
const slots = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-slot="pin-cell"]')] as HTMLElement[];
/** Mirror cells hold their character in an input, not in text. */
const mirrored = (container: HTMLElement) =>
  slots(container).map((s) => (s.querySelector("input") as HTMLInputElement).value);
const activeSlots = (container: HTMLElement) =>
  slots(container).filter((el) => el.getAttribute("data-active") === "true");

describe("PinInput", () => {
  it("renders four mirror cells and one real input", () => {
    const { container } = render(<PinInput />);
    expect(slots(container)).toHaveLength(4);
    // the mirrors are inert; exactly one input is a real tab stop
    const inputs = [...container.querySelectorAll("input")];
    expect(inputs.filter((el) => el.tabIndex !== -1)).toHaveLength(1);
    expect(field(container).getAttribute("aria-label")).toBe("Pin");
  });

  it("takes a custom length and shows it to the field", () => {
    const { container } = render(<PinInput length={6} />);
    expect(slots(container)).toHaveLength(6);
    expect(field(container).maxLength).toBe(6);
  });

  it("mirrors the value into the cells", () => {
    const { container } = render(<PinInput defaultValue="1234" />);
    expect(mirrored(container)).toEqual(["1", "2", "3", "4"]);
  });

  it("reports the code as it grows and calls onComplete when full", () => {
    const onValueChange = vi.fn();
    const onComplete = vi.fn();
    const { container } = render(
      <PinInput onValueChange={onValueChange} onComplete={onComplete} />,
    );
    fireEvent.change(field(container), { target: { value: "12" } });
    expect(onValueChange).toHaveBeenLastCalledWith("12");
    expect(onComplete).not.toHaveBeenCalled();
    fireEvent.change(field(container), { target: { value: "1234" } });
    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("keeps digits only by default and letters when asked", () => {
    const numeric = render(<PinInput />);
    fireEvent.change(field(numeric.container), { target: { value: "1a2b" } });
    expect(field(numeric.container).value).toBe("12");

    const alnum = render(<PinInput type="alphanumeric" />);
    fireEvent.change(field(alnum.container), { target: { value: "a1b2" } });
    expect(field(alnum.container).value).toBe("a1b2");
  });

  it("clamps a pasted code that is longer than the cells", () => {
    const { container } = render(<PinInput />);
    fireEvent.change(field(container), { target: { value: "987654" } });
    expect(field(container).value).toBe("9876");
    expect(mirrored(container)).toEqual(["9", "8", "7", "6"]);
  });

  it("leaves typing, Backspace, arrows and paste to the browser", () => {
    const { container } = render(<PinInput />);
    // the field carries the native affordances rather than hand-written handlers
    expect(field(container).inputMode).toBe("numeric");
    expect(field(container).autocomplete).toBe("one-time-code");
    expect(field(container).pattern).toBe("\\d*");
  });

  it("does not move its own state in controlled use", () => {
    const onValueChange = vi.fn();
    const { container } = render(<PinInput value="1234" onValueChange={onValueChange} />);
    fireEvent.change(field(container), { target: { value: "9234" } });
    expect(onValueChange).toHaveBeenCalledWith("9234");
    expect(field(container).value).toBe("1234");
  });

  it("follows the value prop", () => {
    const { container, rerender } = render(<PinInput value="12" />);
    rerender(<PinInput value="99" />);
    expect(mirrored(container)).toEqual(["9", "9", "", ""]);
  });

  it("blocks input when disabled or read only", () => {
    const { container } = render(<PinInput disabled />);
    expect(field(container).disabled).toBe(true);
    const ro = render(<PinInput readOnly />);
    expect(field(ro.container).readOnly).toBe(true);
  });

  it("puts the sheet border on every cell, and no help marker", () => {
    const { container } = render(<PinInput error />);
    expect(container.querySelectorAll("svg")).toHaveLength(0);
    const regions = [...container.querySelectorAll('[data-slot="value"]')];
    expect(regions).toHaveLength(4);
    expect(regions.every((el) => el.className.includes("border-red-300"))).toBe(true);
    expect(field(container).getAttribute("aria-invalid")).toBe("true");
  });

  it("marks the cell the caret is in, and only that one", () => {
    const { container } = render(<PinInput defaultValue="12" />);
    const el = field(container);
    fireEvent.focus(el);
    fireEvent.change(el, { target: { value: "123" } });
    // jsdom does not move the caret on its own, so place it as a browser would
    el.setSelectionRange(3, 3);
    fireEvent.select(el);
    const active = activeSlots(container);
    expect(active).toHaveLength(1);
    expect(active[0]).toBe(slots(container)[3]);
    // and the active cell carries the shared focus outline
    expect(active[0].querySelector("div")!.className).toContain("outline-2");
  });

  it("moves the marker when the caret moves", () => {
    const { container } = render(<PinInput defaultValue="1234" />);
    const el = field(container);
    fireEvent.focus(el);
    el.setSelectionRange(1, 1);
    fireEvent.select(el);
    expect(activeSlots(container)[0]).toBe(slots(container)[1]);
  });

  it("draws the cells at the verification sheet's size", () => {
    // Figma: button/input/verification. Square cells, one step per size — 64,
    // 80 and 96 — on gaps of 8 and 12, with display digits at 48 and 60.
    const sm = render(<PinInput size="sm" />);
    expect(slots(sm.container)[0].className).toContain("w-16 h-16");
    expect(sm.container.firstElementChild!.className).toContain("gap-2");
    expect(slots(sm.container)[0].querySelector("div")!.className).toContain("text-5xl");

    const md = render(<PinInput size="md" />);
    expect(slots(md.container)[0].className).toContain("w-20 h-20");
    expect(md.container.firstElementChild!.className).toContain("gap-3");
    expect(slots(md.container)[0].querySelector("div")!.className).toContain("text-5xl");

    const lg = render(<PinInput size="lg" />);
    expect(slots(lg.container)[0].className).toContain("w-24 h-24");
    expect(lg.container.firstElementChild!.className).toContain("gap-3");
    expect(slots(lg.container)[0].querySelector("div")!.className).toContain("text-6xl");
  });

  it("shows the placeholder digit in the empty cells", () => {
    // The sheet's resting cell holds a greyed digit; the mirrors carry it as
    // the input's placeholder, so the value always wins once typed.
    const { container } = render(<PinInput defaultValue="12" />);
    const mirrors = slots(container).map(
      (s) => s.querySelector("input") as HTMLInputElement,
    );
    expect(mirrors.map((i) => i.value)).toEqual(["1", "2", "", ""]);
    expect(mirrors.map((i) => i.placeholder)).toEqual(["0", "0", "0", "0"]);
  });

  it("clears the placeholder on the active cell so the caret has a slot", () => {
    const { container } = render(<PinInput defaultValue="12" />);
    const el = field(container);
    fireEvent.focus(el);
    el.setSelectionRange(2, 2);
    fireEvent.select(el);
    const mirrors = slots(container).map(
      (s) => s.querySelector("input") as HTMLInputElement,
    );
    expect(mirrors.map((i) => i.placeholder)).toEqual(["0", "0", "", "0"]);
  });

  it("takes a custom placeholder", () => {
    const { container } = render(<PinInput placeholder="·" />);
    const mirrors = slots(container).map(
      (s) => s.querySelector("input") as HTMLInputElement,
    );
    expect(mirrors.map((i) => i.placeholder)).toEqual(["·", "·", "·", "·"]);
  });

  it("exposes the field to assistive technology and hides the mirrors", () => {
    const { container } = render(<PinInput name="code" />);
    const el = screen.getByLabelText("Pin") as HTMLInputElement;
    expect(el.name).toBe("code");
    // the cells are decoration: hidden from AT and out of the tab order
    for (const slot of slots(container)) {
      expect(slot.getAttribute("aria-hidden")).toBe("true");
      expect((slot.querySelector("input") as HTMLInputElement).tabIndex).toBe(-1);
    }
  });
});
