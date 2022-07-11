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
  it("checking for 2 link elements", () => {
    render(<MockLandingPage />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(2);
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
  it.todo(
    "pass the email to sign up page, when clicking the get started button"
  );
  it.todo("Navigate to the sign in page if email is registered", () => {});
  it.todo("Navigate to the sign up page if email is not registered");
  it.todo(
    "checking if adding a email that exists to the input field navigates to the sign in page"
  );
});
