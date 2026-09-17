import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../src";
describe("Button", () => {
  it("renders disabled while loading", () => {
    render(<Button loading>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" }).hasAttribute("disabled")).toBe(true);
  });
});
