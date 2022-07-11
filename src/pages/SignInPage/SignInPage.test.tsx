import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import SignInPage from "./SignInPage";

const MockSignInPage = () => {
  return (
    <BrowserRouter>
      <SignInPage />
    </BrowserRouter>
  );
};

describe("Testing the SignIn Page", () => {
  it.todo("the netflix logo links to the landing page");
  it.todo("gets the user email passed from the getstarted");
  it.todo("the remeber me checkbox added the user info into the local storage");
  it.todo("the sign in button auth the user");
  it.todo("shows the error when trying to login");
  it.todo("the need help links to my github page");
});
