import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

/**
 * Mark the notification at the given index as read.
 * @param {Number} index The index of the notification to mark as read.
 * @return {Object} An object with type MARK_AS_READ and index set to the given index.
 */
export const markAsRead = (index) => {
  return { type: MARK_AS_READ, index: index };
};

/**
 * Set the type filter for the list of notifications.
 * @param {string} filter The type filter to apply to the list of notifications. Can be either "DEFAULT" or "URGENT".
 * @return {Object} An object with type SET_TYPE_FILTER and filter set to the given filter.
 */
export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};
