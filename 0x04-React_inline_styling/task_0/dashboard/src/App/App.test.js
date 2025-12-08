import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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
  // Mock alert
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

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

  it("when keys `control` and `h` are pressed logOut function is called and alert function is called with string Logging you out", async () => {
    render(<App />);

    const user = userEvent.setup();
    await user.keyboard("{Control>}h{/Control}");
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});
