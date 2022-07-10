import { describe, expect, it } from "vitest";
import Home from "./Home";
import { render, screen, userEvent } from "../../utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<Home />);
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });
});
