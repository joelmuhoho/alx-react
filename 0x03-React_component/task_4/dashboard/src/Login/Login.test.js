import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("renders two inputs and two labels", () => {
    render(<Login />);

    const emailLabelElement = screen.getByLabelText("Email");
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    const pwdLabelElement = screen.getByLabelText("Password");
    const pwdInputElement = screen.getByLabelText("Password");

    expect(emailLabelElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(pwdLabelElement).toBeInTheDocument();
    expect(pwdInputElement).toBeInTheDocument();
  });
});
