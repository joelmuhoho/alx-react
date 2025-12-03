import React from "react";
import "./Notifications.css";
import NotificationItem from "../NotificationItem/NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "../NotificationItem/NotificationItemShape";
// import closeIcon from "./close-icon.png";

const Notification = ({ displayDrawer = false, listNotifications = [] }) => {
  function buttonClicked() {
    console.log("Close button has been clicked");
  }
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => {
                  return (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                    />
                  );
                })}
              </ul>
            </>
          )}
          <button
            style={{ align: "right", ariaLabel: "Close" }}
            onClick={buttonClicked}
            className="Notifications-close-button"
          >
            {/* <img src={closeIcon} alt="close icon"/> */}X
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
Notification.prototype = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
export default Notification;
