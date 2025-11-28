import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

describe("Notifications", () => {
  it("Notification renders without crashing", () => {
    render(<Notifications />);
  });

  it("Notifications renders with three list items", () => {
    render(<Notifications />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(3);
  });

  it("Notification renders with a text 'Here is the list of notifications'", () => {
    render(<Notifications />);
    const paragraphElement = screen.getByText(
      "Here is the list of notifications"
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
