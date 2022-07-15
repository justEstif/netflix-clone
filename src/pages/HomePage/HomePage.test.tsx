import React from "react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";
import { render, screen, userEvent } from "../../utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<HomePage />);
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });
});
