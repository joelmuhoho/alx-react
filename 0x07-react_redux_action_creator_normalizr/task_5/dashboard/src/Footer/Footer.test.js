import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { AppContext } from "../App/AppContext";

describe("Footer", () => {
  let authenticatedUser;
  let user;
  let logOut;

  beforeEach(() => {
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

  afterEach(() => {});
  it("Should render without crashing", () => {
    render(<Footer />);
  });

  it("Should render a text 'Copyright'", () => {
    render(<Footer />);

    const copyRightTextElement = screen.getByText(/Copyright/);

    expect(copyRightTextElement).toBeInTheDocument();
  });
  it("Should render without contact us link when user is not authenticated(logged out)", () => {
    render(
      <AppContext Provider value={{ user: user, logOut: logOut }}>
        <Footer />
      </AppContext>
    );
    const contactUs = screen.queryByText(/Contact us/i);
    expect(contactUs).toBe(null);
  });
  it("Should render with contact us link when user is authenticated(logged in)", () => {
    render(
      <AppContext Provider value={{ user: authenticatedUser, logOut: logOut }}>
        <Footer />
      </AppContext>
    );
    const contactUs = screen.queryByText(/Contact us/i);
    expect(contactUs).toBeInTheDocument();
  });
});
