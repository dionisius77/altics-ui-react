import { describe, expect, it, vi } from "vitest";
import { fireEvent, act, render, screen } from "@testing-library/react";
import { NumberInput } from "../src";
import { boxOf, inputOf, regionOf } from "./helpers";

describe("NumberInput", () => {
  it("renders a spinbutton with the value", () => {
    const { container } = render(<NumberInput defaultValue={5} />);
    const input = inputOf(container);
    expect(input.value).toBe("5");
    expect(input.getAttribute("role")).toBe("spinbutton");
    expect(input.getAttribute("aria-valuenow")).toBe("5");
    expect(input.inputMode).toBe("decimal");
  });

  it("exposes min and max to assistive technology", () => {
    const { container } = render(<NumberInput defaultValue={5} min={0} max={10} />);
    expect(inputOf(container).getAttribute("aria-valuemin")).toBe("0");
    expect(inputOf(container).getAttribute("aria-valuemax")).toBe("10");
  });

  it("steps up and down with the buttons (horizontal)", () => {
    const { container } = render(<NumberInput defaultValue={5} />);
    fireEvent.click(screen.getByLabelText("Increase"));
    expect(inputOf(container).value).toBe("6");
    fireEvent.click(screen.getByLabelText("Decrease"));
    expect(inputOf(container).value).toBe("5");
  });

  it("renders a stacked stepper column in the vertical orientation", () => {
    const { container } = render(<NumberInput orientation="vertical" defaultValue={5} />);
    const panel = boxOf(container).querySelector('[data-slot="panel"]');
    expect(panel).not.toBeNull();
    expect(panel?.querySelectorAll("button")).toHaveLength(2);
    // the value region gives up its trailing inset so the panel sits flush
    expect(regionOf(container).className).toContain("pr-0");
  });

  it("uses the custom step and avoids float drift", () => {
    const { container } = render(<NumberInput defaultValue={0.2} step={0.1} />);
    fireEvent.click(screen.getByLabelText("Increase"));
    expect(inputOf(container).value).toBe("0.3");
  });

  it("clamps to min and max when stepping", () => {
    const { container } = render(<NumberInput defaultValue={9} min={0} max={10} />);
    fireEvent.click(screen.getByLabelText("Increase"));
    expect(inputOf(container).value).toBe("10");
    fireEvent.click(screen.getByLabelText("Increase"));
    expect(inputOf(container).value).toBe("10");
  });

  it("accumulates rapid clicks instead of dropping steps", () => {
    const { container } = render(<NumberInput defaultValue={5} />);
    const increase = screen.getByLabelText("Increase") as HTMLButtonElement;
    // All three clicks inside one act(): React batches them, so each step must
    // build on the previous one rather than on the last rendered value.
    act(() => {
      increase.click();
      increase.click();
      increase.click();
    });
    expect(inputOf(container).value).toBe("8");
  });

  it("draws only the outer sides on the panel, so the seam is not doubled", () => {
    const { container } = render(<NumberInput orientation="vertical" />);
    const panel = boxOf(container).querySelector('[data-slot="panel"]') as HTMLElement;
    expect(panel.className).toContain("border-y");
    expect(panel.className).toContain("border-r");
    // the divider is the value region's own border
    expect(panel.className).not.toContain("border-l");
  });

  it("keeps exactly one padding class per side so the panel sits flush", () => {
    const vertical = render(<NumberInput orientation="vertical" />);
    const vRight = regionOf(vertical.container)
      .className.split(" ")
      .filter((c) => c.startsWith("pr-"));
    expect(vRight).toEqual(["pr-0"]);
    // the field itself keeps the text inset from the panel
    expect(inputOf(vertical.container).className).toContain("pr-3");

    const horizontal = render(<NumberInput />);
    const hRight = regionOf(horizontal.container)
      .className.split(" ")
      .filter((c) => c.startsWith("pr-"));
    // The counter's button is a trailing slot, so the region reserves its
    // width rather than letting it take space from the line.
    expect(hRight).toEqual(["pr-10"]);
  });

  it("centres the value in the horizontal orientation only", () => {
    const horizontal = render(<NumberInput defaultValue={5} />);
    expect(inputOf(horizontal.container).className).toContain("text-center");

    const vertical = render(<NumberInput orientation="vertical" defaultValue={5} />);
    expect(inputOf(vertical.container).className).not.toContain("text-center");
  });

  it("steps with the arrow keys", () => {
    const { container } = render(<NumberInput defaultValue={5} />);
    fireEvent.keyDown(inputOf(container), { key: "ArrowUp" });
    expect(inputOf(container).value).toBe("6");
    fireEvent.keyDown(inputOf(container), { key: "ArrowDown" });
    expect(inputOf(container).value).toBe("5");
  });

  it("reports typed values and clamps them on blur", () => {
    const onValueChange = vi.fn();
    const { container } = render(<NumberInput onValueChange={onValueChange} max={100} />);
    const input = inputOf(container);
    fireEvent.change(input, { target: { value: "999" } });
    expect(onValueChange).toHaveBeenLastCalledWith(999);
    fireEvent.blur(input);
    expect(onValueChange).toHaveBeenLastCalledWith(100);
    expect(input.value).toBe("100");
  });

  it("treats an empty field as no value", () => {
    const onValueChange = vi.fn();
    const { container } = render(<NumberInput defaultValue={5} onValueChange={onValueChange} />);
    fireEvent.change(inputOf(container), { target: { value: "" } });
    expect(onValueChange).toHaveBeenLastCalledWith(null);
    expect(inputOf(container).value).toBe("");
  });

  it("does not move its own text in controlled use", () => {
    const onValueChange = vi.fn();
    const { container } = render(<NumberInput value={5} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByLabelText("Increase"));
    expect(onValueChange).toHaveBeenCalledWith(6);
    expect(inputOf(container).value).toBe("5");
  });

  it("follows the value prop in controlled use", () => {
    const { container, rerender } = render(<NumberInput value={5} />);
    rerender(<NumberInput value={7} />);
    expect(inputOf(container).value).toBe("7");
  });

  it("disables the steppers with the field", () => {
    render(<NumberInput disabled defaultValue={5} />);
    expect((screen.getByLabelText("Increase") as HTMLButtonElement).disabled).toBe(true);
    expect((screen.getByLabelText("Decrease") as HTMLButtonElement).disabled).toBe(true);
  });

  it("shows only the steppers, no help marker", () => {
    const horizontal = render(<NumberInput />);
    expect(horizontal.container.querySelectorAll("svg")).toHaveLength(2);
    const vertical = render(<NumberInput orientation="vertical" />);
    expect(vertical.container.querySelectorAll("svg")).toHaveLength(2);
  });

  it("keeps the rest of the Input contract", () => {
    const { container } = render(<NumberInput size="lg" error />);
    expect(boxOf(container).className).toContain("h-11");
    expect(regionOf(container).className).toContain("border-red-300");
  });
});
