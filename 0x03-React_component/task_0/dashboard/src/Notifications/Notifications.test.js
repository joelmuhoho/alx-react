import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

const listNotifications = [
  {
    id: 1,
    type: "default",
    html: { __html: "New course available" },
    value: "",
  },
  {
    id: 2,
    type: "urgent",
    html: { __html: "New resume available" },
    value: "",
  },
];
describe("Notifications", () => {
  it("Notification renders without crashing", () => {
    render(<Notifications />);
  });

  it("Notifications renders with two list items", () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(2);
  });

  it("Notification renders with a text 'Here is the list of notifications'", () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const paragraphElement = screen.getByText(
      "Here is the list of notifications"
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders NotificationItem component", () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(2);
  });

  it("renders NotificationItem component and first child shows correct text content", () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const firstListItemElement = screen.getByText("New course available");
    expect(firstListItemElement).toBeInTheDocument();
  });

  it("renders a div with class menuItem when property displayDrawer is false", () => {
    render(<Notifications />); // displayDrawer prop is false by default
    const menuElement = screen.getByRole("paragraph");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("menuItem");
  });

  it("does not renders a div with class Notifications when property displayDrawer is false", () => {
    render(<Notifications />); // displayDrawer prop is false by default
    const menuElement = screen.queryByText("Here is the list of notifications");
    expect(menuElement).toBe(null);
  });

  it("renders a div with class menuItem when property displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    const menuElement = screen.getByText("Your notifications");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("menuItem");
  });

  it("renders a div with class Notifications when property displayDrawer is true and listNotifications is not empty", () => {
    render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const menuElement = screen.queryByText("Here is the list of notifications");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("Notifications");
  });

  it("renders correctly if listNotifications array is not passed", () => {
    render(<Notifications displayDrawer={true} />);
    // should show a paragraph with text No new notification for now
    const paragraphElement = screen.getByText("No new notification for now");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent("No new notification for now");
  });
  it("renders correctly if listNotifications is empty array", () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    // should show a paragraph with text No new notification for now
    const paragraphElement = screen.getByText("No new notification for now");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent("No new notification for now");
  });
  it("renders message 'No new notification for now' listNotifications is empty array and not 'Here is the list of notifications'", () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    // should show a paragraph with text No new notification for now
    const correctMessageElement = screen.getByText(
      "No new notification for now"
    );
    const wrongMessageElement = screen.queryByText(
      "Here is the list of notifications"
    );
    expect(correctMessageElement).toBeInTheDocument();
    expect(correctMessageElement).toHaveTextContent(
      "No new notification for now"
    );
    expect(wrongMessageElement).toBe(null);
  });
});
