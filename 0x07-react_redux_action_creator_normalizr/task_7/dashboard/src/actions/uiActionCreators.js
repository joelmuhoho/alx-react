import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./uiActionTypes";

const LOGIN_SUCCESS_URL = "../../dist/login-success.json";

/**
 * Action creator to log a user in.
 * @param {string} email The email of the user.
 * @param {string} password The password of the user.
 * @returns {object} An object with type and user properties.
 */
export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { user: { email, password } },
  };
};

/**
 * Action creator to log a user out.
 * @returns {object} An object with type property.
 */

export const logout = () => {
  return { type: LOGOUT };
};

/**
 * Action creator to display the notification drawer.
 * @returns {object} An object with type property.
 */
export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

/**
 * Action creator to hide the notification drawer.
 * @returns {object} An object with type property.
 */
export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

/**
 * Action creator to indicate a successful login.
 * @returns {object} An object with type property.
 */
export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

/**
 * Action creator to indicate a failed login.
 * @returns {object} An object with type property.
 */
export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

/**
 * Makes a login request to the server.
 * Dispatches the login action with the provided email and password.
 * If the request is successful, dispatches the loginSuccess action.
 * If the request fails, dispatches the loginFailure action.
 * @param {string} email The email of the user.
 * @param {string} password The password of the user.
 * @returns {Promise} A promise that resolves when the login request is complete.
 */
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch(LOGIN_SUCCESS_URL);

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
