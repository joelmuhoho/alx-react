import { NotificationTypeFilters } from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("markAsRead", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedIndex = 1;
    const expectedResults = {
      type: "MARK_AS_READ",
      index: expectedIndex,
    };

    const result = markAsRead(expectedIndex);
    expect(result).toEqual(expectedResults);
  });
});

describe("setNotificationFilter", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = {
      type: "SET_TYPE_FILTER",
      filter: NotificationTypeFilters.DEFAULT,
    };

    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual(expectedResults);
  });
});
