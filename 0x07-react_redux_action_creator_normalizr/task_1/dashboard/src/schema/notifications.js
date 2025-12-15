import allNotifications from "../../notifications";

/**
 * Retrieves all the notifications for a given user
 * @param {string} userId - id of the user to retrieve notifications for
 * @returns {array} - array of notification objects
 */
const getAllNotificationsByUser = (userId) => {
  let userNotificationContext = [];
  for (let i = 0; i < allNotifications.length; i++) {
    if (allNotifications[i].author.id === userId) {
      userNotificationContext.push(allNotifications[i].context);
    }
  }
  return userNotificationContext;
};

export default getAllNotificationsByUser;
