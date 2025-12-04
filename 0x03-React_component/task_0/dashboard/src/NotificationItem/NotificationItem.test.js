import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
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
});
