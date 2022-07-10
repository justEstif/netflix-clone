import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import LandingPage from "./LandingPage";
const MockLandingPage = () => {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
};

describe("Testing the landing page", () => {
  it("the title is visible", () => {
    render(<MockLandingPage />);
    expect(screen.getByText(/Netflix/i)).toBeInTheDocument();
  });
  it("checking for 3 link elements", () => {
    render(<MockLandingPage />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(4);
  });
  it("checking if the title links to landing page", () => {
    render(<MockLandingPage />);
    const titleLink = screen.getByText(/Netflix/i);
    expect(titleLink).toHaveAttribute("href", "/");
  });
  it("checking if the sign in links to sign in page", () => {
    render(<MockLandingPage />);
    const titleLink = screen.getByText("Sign in");
    expect(titleLink).toHaveAttribute("href", "/sign-in");
  });
  it("checking if the sign in links to sign up page", () => {
    render(<MockLandingPage />);
    const titleLink = screen.getByText("Sign up");
    expect(titleLink).toHaveAttribute("href", "/sign-up");
  });
  it.todo(
    "the get stared takes to the sign up page with the input held in state"
  );
});
