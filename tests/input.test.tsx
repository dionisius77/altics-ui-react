import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Field, Input, InputDivider } from "../src";
import { affixesOf, boxOf, dividersOf, inputOf, markerSlotOf, regionOf } from "./helpers";

describe("Input", () => {
  it("renders a textbox with the md size by default", () => {
    const { container } = render(<Input placeholder="Email" />);
    const input = container.querySelector("input");
    expect(input?.placeholder).toBe("Email");
    expect(boxOf(container).className).toContain("h-10");
  });

  it("sizes the box per the size prop", () => {
    const cases = [
      ["sm", "h-9"],
      ["md", "h-10"],
      ["lg", "h-11"],
    ] as const;
    for (const [size, expected] of cases) {
      const { container } = render(<Input size={size} />);
      expect(boxOf(container).className, size).toContain(expected);
    }
  });

  it("sets the sheet's text size per size", () => {
    // Sheet cap heights: 10.1px at sm against 11.5px at md and lg, so md and lg
    // share a size and sm is one step down.
    const cases = [
      ["sm", "text-sm"],
      ["md", "text-base"],
      ["lg", "text-base"],
    ] as const;
    for (const [size, expected] of cases) {
      const { container } = render(<Input size={size} />);
      expect(boxOf(container).className, size).toContain(expected);
    }
  });

  it("marks the field invalid and paints the sheet error border when error is set", () => {
    const { container } = render(<Input error placeholder="Email" />);
    expect(container.querySelector("input")?.getAttribute("aria-invalid")).toBe("true");
    // sheet: error rest border is red-300, drawn by the value region
    expect(regionOf(container).className).toContain("border-red-300");
  });

  it("keeps the sheet rest border when error is absent", () => {
    const { container } = render(<Input />);
    // sheet: rest border is neutral-300, drawn by the value region
    expect(regionOf(container).className).toContain("border-neutral-300");
  });

  it("draws the border on the value region, not the box", () => {
    const { container } = render(<Input />);
    const box = boxOf(container);
    const region = regionOf(container);
    // The box must not draw a border: the focus outline lives on the region, so
    // a border on the box would show beside the outline instead of under it.
    expect(box.className).not.toMatch(/(^|\s)border(-|\s|$)/);
    // The region owns all four sides; its inner edge is the divider when a
    // panel is attached.
    expect(region.className).toMatch(/(^|\s)border(\s|$)/);
    expect(region.className).toContain("border-neutral-300");
  });

  it("puts the error border on the value region too", () => {
    const { container } = render(<Input error />);
    expect(boxOf(container).className).not.toMatch(/(^|\s)border(-|\s|$)/);
    expect(regionOf(container).className).toContain("border-red-300");
  });

  it("shows a help marker by default, which turns red and becomes an alert on error", () => {
    const normal = render(<Input />);
    const normalMarker = normal.container.querySelector("svg")!;
    expect(normalMarker).not.toBeNull();
    expect(normal.container.querySelector('[data-slot="value"]')!.textContent).toBe("");
    // neutral wrapper at rest
    const normalWrapper = normalMarker.closest("span")!;
    expect(normalWrapper.className).toContain("text-neutral-400");

    const errored = render(<Input error />);
    const errorMarker = errored.container.querySelector("svg")!;
    expect(errorMarker.closest("span")!.className).toContain("text-red-600");
    // the glyph itself changes, not just the colour
    expect(errorMarker.innerHTML).not.toBe(normalMarker.innerHTML);
  });

  it("hides the marker when helpIcon is false", () => {
    const { container } = render(<Input helpIcon={false} />);
    expect(container.querySelector("svg")).toBeNull();
  });

  it("makes the marker a button when a handler is given", () => {
    const onHelpClick = vi.fn();
    render(<Input onHelpClick={onHelpClick} />);
    const button = screen.getByLabelText("Help");
    fireEvent.click(button);
    expect(onHelpClick).toHaveBeenCalled();
  });

  it("keeps consumer trailing content before the marker", () => {
    const { container } = render(<Input trailing={<span data-testid="x">kg</span>} />);
    const wrapper = markerSlotOf(container)!;
    const kids = [...wrapper.children].map((el) => el.tagName.toLowerCase());
    expect(kids).toEqual(["span", "svg"]);
  });

  it("trades the size height for a minimum when the overflow is wrap", () => {
    const fixed = render(<Input />);
    expect(boxOf(fixed.container).className).toContain("h-10");
    expect(boxOf(fixed.container).className).not.toContain("min-h-10");

    const growing = render(<Input overflow="wrap" />);
    expect(boxOf(growing.container).className).toContain("min-h-10");
    expect(boxOf(growing.container).className).not.toMatch(/(^|\s)h-10(\s|$)/);
    const region = regionOf(growing.container);
    expect(region.className).toContain("flex-wrap");
    // The sheet insets a chip by 8px from the border box and the region's own
    // border takes 1px of it, so a row is 24 + 14 + 2 = the size height.
    expect(region.className).toContain("py-[7px]");
    // every item is one chip tall, so the rows stay 24 + 6 apart
    expect(inputOf(growing.container).className).toContain("h-6");
  });

  it("keeps the size height and scrolls the line when the overflow is scroll", () => {
    const rendered = render(<Input overflow="scroll" />);
    expect(boxOf(rendered.container).className).toContain("h-10");
    expect(boxOf(rendered.container).className).not.toContain("min-h-10");
    // the text keeps a usable width instead of collapsing to nothing
    expect(inputOf(rendered.container).className).toContain("min-w-16");
    expect(regionOf(rendered.container).className).not.toContain("flex-wrap");
  });

  it("scrolls the leading slot rather than the whole field", () => {
    const { container } = render(<Input overflow="scroll" leading="Rp" trailing="kg" />);
    const region = regionOf(container);
    // The field must not scroll: the text and the marker would scroll out of
    // reach, and with them the only way to click into the field.
    expect(region.className).not.toContain("overflow-x-auto");
    const strip = region.querySelector(":scope > span")!;
    expect(strip.className).toContain("overflow-x-auto");
    expect(strip.className).toContain("min-w-0");
  });

  it("keeps both slots out of the wrapping flow", () => {
    const { container } = render(<Input overflow="wrap" leading="Rp" trailing="kg" />);
    const region = regionOf(container);
    expect(region.className).toContain("gap-x-1.5");
    expect(region.className).toContain("has-[[data-slot=tag]]:pl-2");
    const slots = [...region.querySelectorAll(":scope > span")];
    // The leading slot dissolves, so its children wrap with the text.
    expect(slots[0].className).toContain("contents");
    // The trailing slot is positioned instead: a slot is one un-wrappable box,
    // so in the flow it would jump to a row of its own and add height.
    expect(slots[slots.length - 1].className).toContain("absolute");
    expect(slots[slots.length - 1].className).not.toContain("contents");
  });

  it("reserves the trailing slot's width with padding, not with the line", () => {
    const rendered = render(<Input trailing={<span>pick</span>} />);
    const cls = regionOf(rendered.container).className;
    // md reserves pr-10; nothing in the line may also claim it.
    expect(cls).toContain("pr-10");
    expect(cls).not.toContain("pr-3");
    // scroll mode keeps the slot in the line, so the plain inset stays
    const scrolled = render(<Input overflow="scroll" trailing={<span>pick</span>} />);
    expect(regionOf(scrolled.container).className).toContain("pr-3");
  });

  it("keeps the sheet rhythm in scroll mode too", () => {
    const { container } = render(<Input overflow="scroll" leading="Rp" trailing="kg" />);
    const region = regionOf(container);
    expect(region.className).toContain("gap-x-1.5");
    expect(region.className).toContain("has-[[data-slot=tag]]:pl-2");
  });

  it("leaves a plain field alone", () => {
    const { container } = render(<Input leading="Rp" trailing="kg" />);
    const region = regionOf(container);
    expect(region.className).not.toContain("contents");
    expect(region.className).not.toContain("overflow-x-auto");
  });

  it("focuses the text from a press anywhere in the region", () => {
    const rendered = render(<Input leading="Rp" trailing="kg" />);
    const region = regionOf(rendered.container);
    const input = inputOf(rendered.container);
    // The region is a plain box: without this a press on its padding or on an
    // affix does nothing.
    expect(fireEvent.mouseDown(region)).toBe(false); // prevented
    expect(document.activeElement).toBe(input);
  });

  it("leaves a press on the text itself alone", () => {
    const rendered = render(<Input />);
    const input = inputOf(rendered.container);
    // Cancelling here would take away placing the caret and dragging to select.
    expect(fireEvent.mouseDown(input)).toBe(true); // not prevented
  });

  it("exposes its state as data attributes for consumers to style", () => {
    // The attribute appears only while the state holds, so a consumer can write
    // [data-invalid] instead of tracking classes.
    const plain = boxOf(render(<Input />).container);
    for (const attr of ["data-disabled", "data-invalid", "data-overflow"]) {
      expect(plain.hasAttribute(attr), attr).toBe(false);
    }

    const errored = boxOf(render(<Input error />).container);
    expect(errored.getAttribute("data-invalid")).toBe("true");
    expect(errored.hasAttribute("data-disabled")).toBe(false);

    expect(boxOf(render(<Input disabled />).container).getAttribute("data-disabled")).toBe("true");
    expect(boxOf(render(<Input overflow="wrap" />).container).getAttribute("data-overflow")).toBe(
      "wrap",
    );
    expect(boxOf(render(<Input overflow="scroll" />).container).getAttribute("data-overflow")).toBe(
      "scroll",
    );
  });

  it("does not focus a disabled field", () => {
    const rendered = render(<Input disabled />);
    fireEvent.mouseDown(regionOf(rendered.container));
    expect(document.activeElement).not.toBe(inputOf(rendered.container));
  });

  it("renders the affixes around the text field", () => {
    const { container } = render(<Input leading="Rp" trailing="kg" />);
    const region = container.querySelector('[data-slot="value"]')!;
    const parts = [...region.children].map((el) => el.tagName.toLowerCase());
    expect(parts).toEqual(["span", "input", "span"]);
  });

  it("gives a slot its own edge only when the divider prop asks for it", () => {
    // A divided slot leaves the region and takes the outer border with it, so
    // the region's own border becomes the rule between them. That is what the
    // sheets draw and what keeps focus on the value area: it stops at the rule
    // instead of ringing the affix along with it.
    const bare = boxOf(render(<Input leading="Rp" trailing="kg" />).container);
    expect(affixesOf(bare)).toHaveLength(0);

    const both = boxOf(render(<Input leading="Rp" trailing="kg" divider />).container);
    expect(affixesOf(both)).toHaveLength(2);
    expect(affixesOf(both)[0].className).toContain("border-l");
    expect(affixesOf(both)[1].className).toContain("border-r");

    const leading = boxOf(
      render(<Input leading="https://" divider={{ leading: true }} />).container,
    );
    expect(affixesOf(leading)).toHaveLength(1);

    // the region squares off where the affix panel meets it, so the ring the
    // region draws stops at the rule
    expect(regionOf(both).className).toContain("rounded-l-none");
    expect(regionOf(both).className).toContain("rounded-r-none");
    // The region keeps the sheet's text inset from the rule on both sides. The
    // marker reserves its own space on the trailing one, so ask for a field
    // without one to see the inset itself.
    const noMarker = boxOf(
      render(<Input leading="Rp" trailing="kg" divider helpIcon={false} />).container,
    );
    expect(regionOf(noMarker).className).toContain("pl-3");
    expect(regionOf(noMarker).className).toContain("pr-3");
  });

  it("insets the left edge when only a trailing slot is present", () => {
    const { container } = render(<Input trailing={<span>pick</span>} />);
    // The region carries the sheet inset, so one slot does not collapse the
    // other side. The right is the trailing reservation, covered above.
    expect(container.querySelector('[data-slot="value"]')!.className).toContain("pl-3");
  });
});

describe("InputDivider", () => {
  it("is decorative and spans the box height", () => {
    const { container } = render(<InputDivider />);
    const el = dividersOf(container)[0];
    expect(el.getAttribute("aria-hidden")).toBe("true");
    expect(el.className).toContain("h-full");
    expect(el.className).toContain("w-px");
  });
});

describe("Field", () => {
  it("links the label to the input and describes it with the hint", () => {
    const { container } = render(
      <Field label="Email" hint="We never share it.">
        <Input />
      </Field>,
    );
    const label = container.querySelector("label")!;
    const input = container.querySelector("input")!;
    expect(label.getAttribute("for")).toBe(input.id);
    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy!)?.textContent).toBe("We never share it.");
  });

  it("replaces the hint with the error and announces it", () => {
    const { container } = render(
      <Field label="Email" hint="hint text" error="Enter a valid email address.">
        <Input />
      </Field>,
    );
    const input = container.querySelector("input")!;
    const alert = container.querySelector("[role='alert']");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(container.textContent).not.toContain("hint text");
    expect(alert?.textContent).toBe("Enter a valid email address.");
    expect(input.getAttribute("aria-describedby")).toBe(alert?.id);
  });

  it("marks the control required without putting the asterisk in the label text", () => {
    const { container } = render(
      <Field label="Email" required>
        <Input />
      </Field>,
    );
    const label = container.querySelector("label")!;
    expect(label.querySelector("[aria-hidden='true']")?.textContent).toBe(" *");
    expect(container.querySelector("input")?.required).toBe(true);
  });
});
