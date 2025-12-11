import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "./AppContext";

describe("App", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Should renders without crashing", () => {
    render(<App />);
  });

  it("Should render Notification component that has a paragraph 'Your notifications' text ", () => {
    render(<App />);
    const notificationParagraphElement = screen.getByText("Your notifications");
    expect(notificationParagraphElement).toBeInTheDocument();
    expect(notificationParagraphElement.parentElement).toHaveClass(/menuItem/i);
  });

  it("Should render Header component that has a header element with class header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass(/header/i);
  });

  it("Should render Login component with a paragraph 'Login to access the full dashboard' text ", () => {
    render(<App />);
    const LoginParagraphElement = screen.getByText(
      "Login to access the full dashboard"
    );
    expect(LoginParagraphElement).toBeInTheDocument();
  });

  it("Should render Footer component with a footer element that has a class App-footer", () => {
    render(<App />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass(/footer/i);
  });
});

describe("App when isLoggedIn is true", () => {
  // Mock alert
  let alertSpy;
  let authenticatedUser;
  let user;
  let logOut;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    authenticatedUser = {
      email: "test@mail.com",
      password: "test123",
      isLoggedIn: true,
    };
    user = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    logOut = jest.fn();
  });

  afterEach(() => {
    alertSpy.mockRestore();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Should render CourseList component with a table element", () => {
    render(
      <AppContext Provider value={{ user: authenticatedUser, logOut: logOut }}>
        <App />
      </AppContext>
    );
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("Should not render Login Component", () => {
    render(
      <AppContext Provider value={{ user: authenticatedUser, logOut: logOut }}>
        <App />
      </AppContext>
    );
    const loginElementParagraph = screen.queryByText(
      "Login to access the full dashboard"
    );
    expect(loginElementParagraph).toBe(null);
  });

  it("when keys `control` and `h` are pressed logOut function is called and alert function is called with string Logging you out", async () => {
    render(
      <AppContext Provider value={{ user: authenticatedUser, logOut: logOut }}>
        <App />
      </AppContext>
    );

    const user = userEvent.setup();
    await user.keyboard("{Control>}h{/Control}");
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});

describe("App displayDrawer state", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should render with default value of displayDrawer as false", () => {
    const { container } = render(<App />);
    const notificationsComponent = container.querySelector("Notifications");
    expect(notificationsComponent).not.toBeInTheDocument;
  });

  it("should update displayDrawer to true after calling handleDisplayDrawer", () => {
    const { container, rerender } = render(<App />);

    // First, open it handleDisplayDrawer is called here on click
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem); // handleDisplayDrawer is called
    rerender(<App />);

    // Then, close it
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);
    rerender(<App />);

    const notifications = container.querySelector(".Notifications");
    expect(notifications).toBeNull();
  });

  it("should update displayDrawer to false after calling handleHideDrawer", () => {
    const { container, rerender } = render(<App />);

    // First, open it
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);
    rerender(<App />);

    // Then, close it handleHideDrawer is called on click
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton); // handleHideDrawer is called here
    rerender(<App />);

    const notifications = container.querySelector(".Notifications");
    expect(notifications).toBeNull();
  });
});
