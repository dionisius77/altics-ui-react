import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { FileInput } from "../src";
import { boxOf, regionOf } from "./helpers";

const display = (container: HTMLElement) =>
  container.querySelector("input[readonly]") as HTMLInputElement;
const picker = (container: HTMLElement) =>
  container.querySelector("input[type='file']") as HTMLInputElement;

function choose(container: HTMLElement, files: File[]) {
  fireEvent.change(picker(container), { target: { files } });
}

describe("FileInput", () => {
  it("shows the placeholder until a file is chosen", () => {
    const { container } = render(<FileInput />);
    expect(display(container).value).toBe("");
    expect(display(container).placeholder).toBe("No file chosen");
  });

  it("shows the chosen file name and reports the files", () => {
    const onFilesChange = vi.fn();
    const { container } = render(<FileInput onFilesChange={onFilesChange} />);
    const file = new File(["x"], "report.pdf", { type: "application/pdf" });
    choose(container, [file]);
    expect(display(container).value).toBe("report.pdf");
    expect(onFilesChange).toHaveBeenCalledWith([file]);
  });

  it("lists every file when multiple are chosen", () => {
    const { container } = render(<FileInput multiple />);
    choose(container, [new File(["a"], "a.png"), new File(["b"], "b.png")]);
    expect(display(container).value).toBe("a.png, b.png");
  });

  it("passes accept and multiple to the file input", () => {
    const { container } = render(<FileInput accept="image/*" multiple />);
    expect(picker(container).accept).toBe("image/*");
    expect(picker(container).multiple).toBe(true);
  });

  it("renders the action region attached to the edge, divided from the rest", () => {
    const { container } = render(<FileInput />);
    const panel = boxOf(container).querySelector('[data-slot="panel"]');
    expect(panel).not.toBeNull();
    expect(regionOf(container).className).toContain("pr-0");
    expect(screen.getByText("Browse")).toBeTruthy();
  });

  it("opens the picker through the label, so the field keeps one tab stop", () => {
    const { container } = render(<FileInput />);
    const input = picker(container);
    const label = screen.getByText("Browse");
    expect(label.getAttribute("for")).toBe(input.id);
    // the input lives inside the box, so focus-within still applies
    expect(boxOf(container).contains(input)).toBe(true);
  });

  it("takes a custom action label", () => {
    render(<FileInput actionLabel="Upload" />);
    expect(screen.getByText("Upload")).toBeTruthy();
  });

  it("shows a spinner and blocks the action while loading", () => {
    const { container } = render(<FileInput loading />);
    expect(screen.getByRole("status")).toBeTruthy();
    expect(picker(container).disabled).toBe(true);
    expect(screen.getByText("Browse").className).toContain("cursor-not-allowed");
  });

  it("disables the picker and the field when disabled", () => {
    const { container } = render(<FileInput disabled />);
    expect(picker(container).disabled).toBe(true);
    expect(display(container).disabled).toBe(true);
  });

  it("shows a help button only when a handler is given", () => {
    const onHelpClick = vi.fn();
    const without = render(<FileInput />);
    expect(without.queryByLabelText("Help")).toBeNull();

    const withHelp = render(<FileInput onHelpClick={onHelpClick} />);
    fireEvent.click(screen.getByLabelText("Help"));
    expect(onHelpClick).toHaveBeenCalled();
    expect(withHelp.container.querySelector("input[type='file']")).not.toBeNull();
  });

  it("rings only the value region on focus, and the divider belongs to it", () => {
    const { container } = render(<FileInput />);
    const value = regionOf(container);
    const panel = boxOf(container).querySelector('[data-slot="panel"]') as HTMLElement;
    expect(value.className).toContain("focus-within:outline-2");
    // the box itself carries no focus decoration any more
    expect(boxOf(container).className).not.toContain("focus-within:outline");
    // the divider sits on the value region so the outline paints over it
    // the region owns all four borders, so its inner edge is the divider the
    // outline paints over; the panel only draws its outer sides
    expect(value.className).toContain("border");
    expect(panel.className).toContain("border-r");
    expect(panel.className).not.toContain("border-l");
    // and the focused control is inside that region
    expect(value.contains(picker(container))).toBe(true);
  });

  it("keeps the rest of the Input contract", () => {
    const { container } = render(<FileInput size="lg" error />);
    expect(boxOf(container).className).toContain("h-11");
    expect(regionOf(container).className).toContain("border-red-300");
  });
});
