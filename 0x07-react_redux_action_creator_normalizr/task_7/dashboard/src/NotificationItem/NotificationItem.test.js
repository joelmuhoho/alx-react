import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("NotificationItem", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    render(<NotificationItem />);
  });

  it("renders properties `data-notification-type` and `value` passed correctly", () => {
    render(<NotificationItem type="default" value="test" />);
    const listItemElement = screen.getByRole("listitem");

    expect(listItemElement).toBeInTheDocument();
    expect(listItemElement).toHaveAttribute(
      "data-notification-type",
      "default"
    );
    expect(listItemElement).toHaveAttribute("value", "test");
  });

  it("renders properties `data-notification-type`, `value` and `html` passed correctly", () => {
    render(
      <NotificationItem
        type="default"
        html={{ __html: "<u>test</u>" }}
        value="test"
      />
    );

    const listItemElement = screen.getByRole("listitem");

    expect(listItemElement).toBeInTheDocument();
    expect(listItemElement).toHaveAttribute(
      "data-notification-type",
      "default"
    );
    expect(listItemElement).toHaveAttribute("value", "test");
    expect(listItemElement).toHaveTextContent("test");
  });

  it("make sure NotificationItem component when clicked it calls markNotificationAsRead property with right ID", async () => {
    const testNotification = {
      id: 7,
      type: "urgent",
      html: { __html: "New course available" },
      value: "",
    };
    const markNotificationAsRead = jest.fn(); // Mock function
    render(
      <NotificationItem
        markNotificationAsRead={markNotificationAsRead}
        id={testNotification.id}
        type={testNotification.type}
        html={testNotification.html}
        value={testNotification.value}
      />
    );
    const notification = screen.getByText(/New course available/i);
    expect(notification).toBeInTheDocument();

    fireEvent.click(notification); // Simulate click event
    expect(markNotificationAsRead).toHaveBeenCalledWith(testNotification.id);
  });

  it("make sure NotificationItem component when clicked it calls markNotificationAsRead property with right ID and removed from notifications", async () => {
    const testNotification = {
      id: 7,
      type: "urgent",
      html: { __html: "New course available" },
      value: "",
    };
    const markNotificationAsRead = jest.fn(); // Mock function
    const { rerender } = render(
      <NotificationItem
        markNotificationAsRead={markNotificationAsRead}
        id={testNotification.id}
        type={testNotification.type}
        html={testNotification.html}
        value={testNotification.value}
      />
    );
    const notification = screen.getByText(/New course available/i);
    fireEvent.click(notification); // Simulate click event
    expect(markNotificationAsRead).toHaveBeenCalledWith(testNotification.id);
    expect(notification).toBeInTheDocument();

    rerender(<NotificationItem />);
    const removedNotification = screen.queryByText(/New course available/i);
    expect(removedNotification).toBe(null);
  });
});
