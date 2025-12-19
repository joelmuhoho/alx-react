import BodySection from "./BodySection";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BodySection", () => {
  it("render without crashing", () => {
    render(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
  });
  it("render correctly the children and one h2 element", () => {
    render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const title = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");
    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(title).toHaveTextContent("test title");
    expect(paragraph).toHaveTextContent("test children node");
  });
});
