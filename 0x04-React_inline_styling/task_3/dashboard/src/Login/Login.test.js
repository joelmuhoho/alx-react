import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    render(<Login />);
  });

  it("renders two inputs and two labels", () => {
    render(<Login />);

    const emailLabelElement = screen.getByLabelText(/Email/i);
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    const pwdLabelElement = screen.getByLabelText(/Password/i);
    const pwdInputElement = screen.getByLabelText(/Password/i);

    expect(emailLabelElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(pwdLabelElement).toBeInTheDocument();
    expect(pwdInputElement).toBeInTheDocument();
  });
});
