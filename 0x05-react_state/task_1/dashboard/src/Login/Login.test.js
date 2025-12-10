import { render, screen, fireEvent } from "@testing-library/react";
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

  it("Should render with Login button disabled by default", () => {
    render(<Login />);
    const LoginButton = screen.getByRole("button", { name: /Login/i });
    expect(LoginButton).toBeInTheDocument();
    expect(LoginButton).toBeDisabled();
  });
  it("Should render with disabled Login button after adding email and password Login Button should be enabled", () => {
    render(<Login />);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/Password/i);
    const LoginButton = screen.getByRole("button", { name: /Login/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(LoginButton).toBeInTheDocument();
    expect(LoginButton).toBeDisabled();

    // enter data
    fireEvent.change(emailInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "securepassword123" } });

    // login button should be enabled
    expect(LoginButton).toBeEnabled();
  });
});
