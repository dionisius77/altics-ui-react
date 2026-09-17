import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { OtpInput } from "../src";

/** The one real input; the mirror cells also contain an input each. */
const field = (container: HTMLElement) =>
  container.querySelector("input[aria-label]") as HTMLInputElement;
const slots = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-slot="otp-cell"]')] as HTMLElement[];
/** Mirror cells hold their character in an input, not in text. */
const mirrored = (container: HTMLElement) =>
  slots(container).map((s) => (s.querySelector("input") as HTMLInputElement).value);
const activeSlots = (container: HTMLElement) =>
  slots(container).filter((el) => el.getAttribute("data-active") === "true");

describe("OtpInput", () => {
  it("renders four mirror cells and one real input", () => {
    const { container } = render(<OtpInput />);
    expect(slots(container)).toHaveLength(4);
    // the mirrors are inert; exactly one input is a real tab stop
    const inputs = [...container.querySelectorAll("input")];
    expect(inputs.filter((el) => el.tabIndex !== -1)).toHaveLength(1);
    expect(field(container).getAttribute("aria-label")).toBe("One-time code");
  });

  it("takes a custom length and shows it to the field", () => {
    const { container } = render(<OtpInput length={6} />);
    expect(slots(container)).toHaveLength(6);
    expect(field(container).maxLength).toBe(6);
  });

  it("mirrors the value into the cells", () => {
    const { container } = render(<OtpInput defaultValue="1234" />);
    expect(mirrored(container)).toEqual(["1", "2", "3", "4"]);
  });

  it("reports the code as it grows and calls onComplete when full", () => {
    const onValueChange = vi.fn();
    const onComplete = vi.fn();
    const { container } = render(
      <OtpInput onValueChange={onValueChange} onComplete={onComplete} />,
    );
    fireEvent.change(field(container), { target: { value: "12" } });
    expect(onValueChange).toHaveBeenLastCalledWith("12");
    expect(onComplete).not.toHaveBeenCalled();
    fireEvent.change(field(container), { target: { value: "1234" } });
    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("keeps digits only by default and letters when asked", () => {
    const numeric = render(<OtpInput />);
    fireEvent.change(field(numeric.container), { target: { value: "1a2b" } });
    expect(field(numeric.container).value).toBe("12");

    const alnum = render(<OtpInput type="alphanumeric" />);
    fireEvent.change(field(alnum.container), { target: { value: "a1b2" } });
    expect(field(alnum.container).value).toBe("a1b2");
  });

  it("clamps a pasted code that is longer than the cells", () => {
    const { container } = render(<OtpInput />);
    fireEvent.change(field(container), { target: { value: "987654" } });
    expect(field(container).value).toBe("9876");
    expect(mirrored(container)).toEqual(["9", "8", "7", "6"]);
  });

  it("leaves typing, Backspace, arrows and paste to the browser", () => {
    const { container } = render(<OtpInput />);
    // the field carries the native affordances rather than hand-written handlers
    expect(field(container).inputMode).toBe("numeric");
    expect(field(container).autocomplete).toBe("one-time-code");
    expect(field(container).pattern).toBe("\\d*");
  });

  it("does not move its own state in controlled use", () => {
    const onValueChange = vi.fn();
    const { container } = render(<OtpInput value="1234" onValueChange={onValueChange} />);
    fireEvent.change(field(container), { target: { value: "9234" } });
    expect(onValueChange).toHaveBeenCalledWith("9234");
    expect(field(container).value).toBe("1234");
  });

  it("follows the value prop", () => {
    const { container, rerender } = render(<OtpInput value="12" />);
    rerender(<OtpInput value="99" />);
    expect(mirrored(container)).toEqual(["9", "9", "", ""]);
  });

  it("blocks input when disabled or read only", () => {
    const { container } = render(<OtpInput disabled />);
    expect(field(container).disabled).toBe(true);
    const ro = render(<OtpInput readOnly />);
    expect(field(ro.container).readOnly).toBe(true);
  });

  it("puts the sheet border on every cell, and no help marker", () => {
    const { container } = render(<OtpInput error />);
    expect(container.querySelectorAll("svg")).toHaveLength(0);
    const regions = [...container.querySelectorAll('[data-slot="value"]')];
    expect(regions).toHaveLength(4);
    expect(regions.every((el) => el.className.includes("border-red-300"))).toBe(true);
    expect(field(container).getAttribute("aria-invalid")).toBe("true");
  });

  it("marks the cell the caret is in, and only that one", () => {
    const { container } = render(<OtpInput defaultValue="12" />);
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
    const { container } = render(<OtpInput defaultValue="1234" />);
    const el = field(container);
    fireEvent.focus(el);
    el.setSelectionRange(1, 1);
    fireEvent.select(el);
    expect(activeSlots(container)[0]).toBe(slots(container)[1]);
  });

  it("accepts the sizes from the field ramp", () => {
    const { container } = render(<OtpInput size="lg" />);
    expect(slots(container)[0].className).toContain("w-11");
    expect(slots(container)[0].querySelector("div")!.className).toContain("h-11");
  });

  it("exposes the field to assistive technology and hides the mirrors", () => {
    const { container } = render(<OtpInput name="code" />);
    const el = screen.getByLabelText("One-time code") as HTMLInputElement;
    expect(el.name).toBe("code");
    // the cells are decoration: hidden from AT and out of the tab order
    for (const slot of slots(container)) {
      expect(slot.getAttribute("aria-hidden")).toBe("true");
      expect((slot.querySelector("input") as HTMLInputElement).tabIndex).toBe(-1);
    }
  });
});
