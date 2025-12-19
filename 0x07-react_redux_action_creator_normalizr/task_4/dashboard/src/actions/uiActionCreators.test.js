import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

describe("login", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = {
      type: "LOGIN",
      user: { user: { email: undefined, password: undefined } },
    };

    const result = login();
    expect(result).toEqual(expectedResults);
  });
});

describe("logout", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = {
      type: "LOGOUT",
    };

    const result = logout();
    expect(result).toEqual(expectedResults);
  });
});

describe("displayNotificationDrawer", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = {
      type: "DISPLAY_NOTIFICATION_DRAWER",
    };

    const result = displayNotificationDrawer();
    expect(result).toEqual(expectedResults);
  });
});

describe("hideNotificationDrawer", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = {
      type: "HIDE_NOTIFICATION_DRAWER",
    };

    const result = hideNotificationDrawer();
    expect(result).toEqual(expectedResults);
  });
});
