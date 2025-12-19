import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

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
