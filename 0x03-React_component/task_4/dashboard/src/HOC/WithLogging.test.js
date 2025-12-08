import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("WithLogging", () => {
  it("renders and console.log is called on mount and on unmount with Component when the wrapped element is pure html", () => {
    console.log = jest.fn();
    const SimpleComponent = () => <div>Simple Component</div>;
    const WrappedComponent = WithLogging(SimpleComponent);

    render(<WrappedComponent />);
    expect(screen.getByText("Simple Component")).toBeInTheDocument();
    expect(console.log).toHaveBeenCalledWith(
      "Component SimpleComponent is mounted"
    );
  });

  it("renders and console.log is called on mount and unmount with Login component being wrapped", () => {
    console.log = jest.fn();
    const WrappedLogin = WithLogging(Login);

    const { unmount } = render(<WrappedLogin />);
    const emailLabelElement = screen.getByLabelText("Email");
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    const pwdLabelElement = screen.getByLabelText("Password");
    const pwdInputElement = screen.getByLabelText("Password");

    expect(emailLabelElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(pwdLabelElement).toBeInTheDocument();
    expect(pwdInputElement).toBeInTheDocument();
    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");

    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
