import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList";
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
];
describe("CourseList", () => {
  it("renders without crashing", () => {
    render(<CourseList />);
  });
  it("renders correctly if listCourses(array of courses) is not passed", () => {
    render(<CourseList />);
    const messageElement = screen.getByText("No course available yet");
    expect(messageElement).toBeInTheDocument();
  });
  it("renders correctly if listCourses(empty array of courses) is passed", () => {
    render(<CourseList listCourses={[]} />);
    const messageElement = screen.getByText("No course available yet");
    expect(messageElement).toBeInTheDocument();
  });

  it("renders correctly if listCourses(array of courses) is passed", () => {
    render(<CourseList listCourses={listCourses} />);
    const rows = screen.getAllByRole("row"); // expect to be 4 (2 header and 2 our courses)
    expect(rows.length).toBe(4);
  });
});
