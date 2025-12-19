import { NotificationTypeFilters } from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("markAsRead", () => {
  it("Should return correct action object when called", () => {
    const expectedIndex = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index: expectedIndex,
    };

    const action = markAsRead(expectedIndex);
    expect(action).toEqual(expectedAction);
  });
});

describe("setNotificationFilter", () => {
  it("Should return correct action object when called", () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };

    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual(expectedAction);
  });
});
