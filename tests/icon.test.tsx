import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { Icon, ActivityIcon, ArrowLeftIcon, BoxAltIcon } from "../src";
import * as IconsBarrel from "../src/components/icon/icons";

const svgModules = import.meta.glob("../src/assets/icons/*.svg");

describe("Icon (static)", () => {
  it("renders a generated icon with size", () => {
    const { container } = render(<ActivityIcon size={32} data-testid="activity" />);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute("width")).toBe("32");
    expect(svg?.getAttribute("height")).toBe("32");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("defaults to size 24", () => {
    const { container } = render(<ActivityIcon />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("24");
    expect(svg?.getAttribute("height")).toBe("24");
  });

  it("explicit width/height override size", () => {
    const { container } = render(<ActivityIcon size={32} width={48} height={16} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("48");
    expect(svg?.getAttribute("height")).toBe("16");
  });

  it("passes className, style, and handlers through", () => {
    const onClick = vi.fn();
    const { container } = render(
      <ActivityIcon
        className="text-primary"
        style={{ opacity: "0.5" }}
        onClick={onClick}
        data-testid="activity"
      />,
    );
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("text-primary")).toBe(true);
    expect(svg?.style.opacity).toBe("0.5");
    fireEvent.click(svg!);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("sets displayName on generated components", () => {
    expect(ActivityIcon.displayName).toBe("ActivityIcon");
    expect(ArrowLeftIcon.displayName).toBe("ArrowLeftIcon");
    expect(BoxAltIcon.displayName).toBe("BoxAltIcon");
  });

  it("inherits color via currentColor", () => {
    const { container } = render(<ArrowLeftIcon className="text-primary" data-testid="arrow" />);
    expect(container.querySelector("svg.text-primary")).not.toBeNull();
  });

  it("namespaces clip ids per icon", () => {
    const { container } = render(<BoxAltIcon data-testid="box" />);
    const svg = container.querySelector("svg");
    expect(svg?.innerHTML).toContain("BoxAltIcon-clip");
    expect(svg?.innerHTML).toContain("clipPath");
  });

  it("exports every SVG as a component (codegen drift guard)", () => {
    const svgCount = Object.keys(svgModules).length;
    const componentCount = Object.values(IconsBarrel).filter(
      (v) => typeof v === "function",
    ).length;
    expect(svgCount).toBeGreaterThan(0);
    expect(componentCount).toBe(svgCount);
  });

  it("Icon wrapper aligns children", () => {
    const { container } = render(
      <Icon size={16} data-testid="wrap">
        <ActivityIcon />
      </Icon>,
    );
    const wrap = container.querySelector("span");
    expect(wrap?.style.width).toBe("16px");
    expect(wrap?.querySelector("svg")).not.toBeNull();
  });

  it("Icon wrapper defaults to 24 and merges className/style", () => {
    const { container } = render(
      <Icon className="extra" style={{ color: "red" }} data-testid="wrap">
        <ActivityIcon />
      </Icon>,
    );
    const wrap = container.querySelector("span");
    expect(wrap?.style.width).toBe("24px");
    expect(wrap?.style.height).toBe("24px");
    expect(wrap?.classList.contains("extra")).toBe(true);
    expect(wrap?.style.color).toBe("red");
    expect(wrap?.getAttribute("aria-hidden")).toBe("true");
  });
});
