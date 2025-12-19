import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("login", () => {
  it("Should return the correct action object when called.", () => {
    const expectedResults = {
      type: LOGIN,
      user: { user: { email: undefined, password: undefined } },
    };

    const result = login();
    expect(result).toEqual(expectedResults);
  });
});

describe("logout", () => {
  it("Should return the correct action object when called.", () => {
    const expectedResults = {
      type: LOGOUT,
    };

    const result = logout();
    expect(result).toEqual(expectedResults);
  });
});

describe("displayNotificationDrawer", () => {
  it("Should return the correct action object when called.", () => {
    const expectedResults = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };

    const result = displayNotificationDrawer();
    expect(result).toEqual(expectedResults);
  });
});

describe("hideNotificationDrawer", () => {
  it("Should return the correct action object when called.", () => {
    const expectedResults = {
      type: HIDE_NOTIFICATION_DRAWER,
    };

    const result = hideNotificationDrawer();
    expect(result).toEqual(expectedResults);
  });
});
