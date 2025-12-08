import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom", () => {
  it("renders without crashing", () => {
    render(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
  });
  it("render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const title = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");
    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(title).toHaveTextContent("test title");
    expect(paragraph).toHaveTextContent("test children node");
  });
});
