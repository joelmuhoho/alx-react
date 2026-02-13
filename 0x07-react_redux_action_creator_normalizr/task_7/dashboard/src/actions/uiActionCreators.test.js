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
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./uiActionTypes";
import { loginRequest } from "./uiActionCreators";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const LOGIN_URL = "/dist/login-success.json";

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

describe("uiActionCreators", () => {
  it("creates LOGIN and LOGIN_FAILURE when fetching API fails", () => {
    // Simulate a failure (e.g., 404 or 500 error)
    fetchMock.get(LOGIN_URL, 500);

    const expectedActions = [
      {
        type: LOGIN,
        user: { user: { email: "test@test.com", password: "password" } },
      },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@test.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("creates LOGIN_SUCCESS when fetching API succeeds", () => {
    fetchMock.get(LOGIN_URL, {
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      {
        type: LOGIN,
        user: { user: { email: "test@test.com", password: "password" } },
      },
      {
        type: LOGIN_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@test.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
