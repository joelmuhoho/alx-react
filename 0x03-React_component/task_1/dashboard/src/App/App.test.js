import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders Notification component that has a paragraph 'Your notifications' text ", () => {
    render(<App />);
    const notificationParagraphElement = screen.getByText("Your notifications");
    expect(notificationParagraphElement).toBeInTheDocument();
    expect(notificationParagraphElement.parentElement).toHaveClass("menuItem");
  });

  it("renders Header component that has a header element with class App-header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("App-header");
  });

  it("renders Login component with a paragraph 'Login to access the full dashboard' text ", () => {
    render(<App />);
    const LoginParagraphElement = screen.getByText(
      "Login to access the full dashboard"
    );
    expect(LoginParagraphElement).toBeInTheDocument();
  });

  it("renders Footer component with a footer element that has a class App-footer", () => {
    render(<App />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("App-footer");
  });
});

describe("App when isLoggedIn is true", () => {
  it("renders CourseList component with a table element", () => {
    render(<App isLoggedIn={true} />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("does not render Login Component", () => {
    render(<App isLoggedIn={true} />);
    const loginElementParagraph = screen.queryByText(
      "Login to access the full dashboard"
    );
    expect(loginElementParagraph).toBe(null);
  });
});
