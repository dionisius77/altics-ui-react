import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Field, Input } from "../src";
import { inputOf } from "./helpers";

const warnings = (spy: { mock: { calls: unknown[][] } }) =>
  spy.mock.calls.filter(([message]) => String(message).includes("Field needs a child it can wire"));

describe("Field", () => {
  it("labels the control and points its description at the hint", () => {
    const { container } = render(
      <Field label="Email" hint="We never share it.">
        <Input />
      </Field>,
    );
    const input = inputOf(container);
    expect(input.id).not.toBe("");
    expect(screen.getByText("Email").getAttribute("for")).toBe(input.id);
    expect(input.getAttribute("aria-describedby")).toBe(screen.getByText("We never share it.").id);
  });

  it("describes the error instead of the hint once invalid", () => {
    const { container } = render(
      <Field label="Email" hint="Hidden while invalid" error="Required">
        <Input />
      </Field>,
    );
    const alert = screen.getByRole("alert");
    expect(alert.textContent).toBe("Required");
    expect(inputOf(container).getAttribute("aria-describedby")).toBe(alert.id);
  });

  it("marks a required control and shows the asterisk", () => {
    const { container } = render(
      <Field label="Email" required>
        <Input />
      </Field>,
    );
    expect(inputOf(container).required).toBe(true);
    expect(screen.getByText("*")).toBeTruthy();
  });

  it("warns when the child cannot be wired", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    // Text, a fragment and a host element each take none of the props Field
    // sets, which would leave the label pointing at nothing.
    render(<Field label="Text">just text</Field>);
    render(
      <Field label="Fragment">
        <>
          <Input />
        </>
      </Field>,
    );
    render(
      <Field label="Plain">
        <input />
      </Field>,
    );
    expect(warnings(warn)).toHaveLength(3);
    expect(String(warnings(warn)[0][0])).toContain("Pass a component such as Input");
    warn.mockRestore();
  });

  it("stays quiet for a child it can wire", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    render(
      <Field label="Email" hint="Fine">
        <Input />
      </Field>,
    );
    expect(warnings(warn)).toHaveLength(0);
    warn.mockRestore();
  });
});
