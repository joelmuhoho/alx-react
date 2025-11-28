import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  // test App renders without crashing
  it("App Renders without crashing", () => {
    render(<App />);
  });

  it("App renders with a header element that has a class App-header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("App-header");
  });

  it("App renders with a main element that has a class App-body.", () => {
    render(<App />);
    const bodyElement = screen.getByRole("main");
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("App-body");
  });

  it("App renders with a footer element that has a class App-footer", () => {
    render(<App />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("App-footer");
  });
});
