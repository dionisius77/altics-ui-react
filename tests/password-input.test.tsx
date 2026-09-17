import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { PasswordInput } from "../src";
import { boxOf } from "./helpers";

function toggleButton(container: HTMLElement) {
  return container.querySelector("button")!;
}

describe("PasswordInput", () => {
  it("masks the value by default", () => {
    const { container } = render(<PasswordInput defaultValue="s3cret!" />);
    expect(container.querySelector("input")?.type).toBe("password");
    expect(toggleButton(container).getAttribute("aria-pressed")).toBe("false");
    expect(toggleButton(container).getAttribute("aria-label")).toBe("Show password");
  });

  it("reveals and masks the value when the user toggles", () => {
    const { container } = render(<PasswordInput defaultValue="s3cret!" />);
    const button = toggleButton(container);
    fireEvent.click(button);
    expect(container.querySelector("input")?.type).toBe("text");
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(button.getAttribute("aria-label")).toBe("Hide password");
    fireEvent.click(button);
    expect(container.querySelector("input")?.type).toBe("password");
    expect(button.getAttribute("aria-pressed")).toBe("false");
  });

  it("starts visible when defaultVisible is set", () => {
    const { container } = render(<PasswordInput defaultVisible />);
    expect(container.querySelector("input")?.type).toBe("text");
  });

  it("reports changes in uncontrolled use", () => {
    const onVisibleChange = vi.fn();
    const { container } = render(<PasswordInput onVisibleChange={onVisibleChange} />);
    fireEvent.click(toggleButton(container));
    expect(onVisibleChange).toHaveBeenCalledWith(true);
  });

  it("does not change its own state in controlled use", () => {
    const onVisibleChange = vi.fn();
    const { container } = render(
      <PasswordInput visible={false} onVisibleChange={onVisibleChange} />,
    );
    fireEvent.click(toggleButton(container));
    expect(onVisibleChange).toHaveBeenCalledWith(true);
    expect(container.querySelector("input")?.type).toBe("password");
  });

  it("follows the visible prop in controlled use", () => {
    const { container } = render(<PasswordInput visible />);
    expect(container.querySelector("input")?.type).toBe("text");
  });

  it("disables the toggle with the field", () => {
    const { container } = render(<PasswordInput disabled />);
    expect(toggleButton(container).disabled).toBe(true);
  });

  it("shows only the visibility toggle, no help marker", () => {
    const { container } = render(<PasswordInput />);
    // the eye is the only icon; the sheets give password fields no marker
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });

  it("keeps the rest of the Input contract", () => {
    const { container } = render(
      <PasswordInput size="lg" error placeholder="Password" leading="key" />,
    );
    const box = boxOf(container);
    expect(box.className).toContain("h-11");
    // sheet: error rest border is red-300
    expect(container.querySelector('[data-slot="value"]')!.className).toContain("border-red-300");
    expect(container.querySelector("input")?.getAttribute("aria-invalid")).toBe("true");
  });
});
