import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header", () => {
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
});
