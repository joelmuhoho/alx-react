import Header from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

describe("Header", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    render(<Header />);
  });

  it("renders an img and h1 tags", () => {
    render(<Header />);
    const imgElement = screen.getByRole("img");
    const h1Element = screen.getByRole("heading");

    expect(imgElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
  });
  it("should reader without logoutSection when default context values are provided", () => {
    const logOutMock = jest.fn();
    const user = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    const logOut = logOutMock;
    render(
      <AppContext Provider value={{ user: user, logOut: logOut }}>
        <Header />
      </AppContext>
    );
    const logOutSection = screen.queryByText(/Welcome/i);
    expect(logOutSection).toBe(null);
  });

  it("should reader with logoutSection when context values are defined", () => {
    const logOutMock = jest.fn();
    const user = {
      email: "test@mail.com",
      password: "test123",
      isLoggedIn: true,
    };

    const logOut = logOutMock;
    render(
      <AppContext Provider value={{ user: user, logOut: logOut }}>
        <Header />
      </AppContext>
    );
    const logOutSection = screen.queryByText(/Welcome test@mail.com/i);
    expect(logOutSection).toBeInTheDocument();
  });
  it("should reader with logoutSection when context values are defined and when logOut is clicked logout function is called", () => {
    const user = {
      email: "test@mail.com",
      password: "test123",
      isLoggedIn: true,
    };

    const logOut = jest.fn();
    const { rerender } = render(
      <AppContext Provider value={{ user: user, logOut: logOut }}>
        <Header />
      </AppContext>
    );
    const logOutSection = screen.queryByText(/Welcome test@mail.com/i);
    const logOutBtn = screen.getByRole("button", { name: /LogOut/i });
    expect(logOutSection).toBeInTheDocument();
    expect(logOutBtn).toBeInTheDocument();

    // click on logout
    fireEvent.click(logOutBtn);
    expect(logOut).toBeCalled();

    rerender(<Header />);
    const logOutSection2 = screen.queryByText(/Welcome test@mail.com/i);
    expect(logOutSection2).toBeNull();
  });
});
