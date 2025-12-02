import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders without crashing", () => {
    render(<CourseList />);
  });

  it("renders 5 different rows", () => {
    render(<CourseList />);

    const courseListItemElements = screen.queryAllByRole("row");
    expect(courseListItemElements.length).toBe(5);
  });
});
