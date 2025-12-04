import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    render(<CourseListRow isHeader={true} textFirstCell="header1" />);
    const listItemElement = screen.getByText("header1");
    expect(listItemElement).toBeInTheDocument();
    expect(listItemElement).toHaveAttribute("colspan", "2");
  });

  it("renders two cells when textSecondCell is present", () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="header1"
        textSecondCell="heading2"
      />
    );
    const firstListItemElement = screen.getByText("header1");
    const secondListItemElement = screen.getByText("heading2");
    expect(firstListItemElement).toBeInTheDocument();
    expect(secondListItemElement).toBeInTheDocument();
  });

  it("renders correctly two td elements within a tr element when isHeader is false;default", () => {
    render(<CourseListRow textFirstCell="cell1" textSecondCell="cell2" />);
    const rowElement = screen.getByRole("row");
    const firstCellElement = screen.getByText("cell1");
    const secondCellElement = screen.getByText("cell2");
    expect(rowElement.children.length).toBe(2);
    expect(firstCellElement).toBeInTheDocument();
    expect(secondCellElement).toBeInTheDocument();
  });
});
