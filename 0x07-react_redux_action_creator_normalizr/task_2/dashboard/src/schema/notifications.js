import allNotifications from "../../notifications";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedNotifications = normalize(allNotifications, [notification]);

/**
 * Retrieves all the notifications for a given user
 * @param {string} userId - id of the user to retrieve notifications for
 * @returns {array} - array of notification objects
 */
const getAllNotificationsByUser = (userId) => {
  let userNotificationContext = [];

  for (const notificationId of normalizedNotifications.result) {
    const notification =
      normalizedNotifications.entities.notifications[notificationId];
    if (notification.author === userId) {
      const message =
        normalizedNotifications.entities.messages[notification.context];
      userNotificationContext.push(message);
    }
  }
  return userNotificationContext;
};

export { getAllNotificationsByUser, normalizedNotifications };
