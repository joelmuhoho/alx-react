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
    const expectedAction = {
      type: LOGIN,
      user: { user: { email: undefined, password: undefined } },
    };

    const action = login();
    expect(action).toEqual(expectedAction);
  });
});

describe("logout", () => {
  it("Should return the correct action object when called.", () => {
    const expectedAction = {
      type: LOGOUT,
    };

    const action = logout();
    expect(action).toEqual(expectedAction);
  });
});

describe("displayNotificationDrawer", () => {
  it("Should return the correct action object when called.", () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };

    const action = displayNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
});

describe("hideNotificationDrawer", () => {
  it("Should return the correct action object when called.", () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };

    const action = hideNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
});
