import React from "react";
import "./Notifications.css";
import NotificationItem from "../NotificationItem/NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "../NotificationItem/NotificationItemShape";
// import closeIcon from "./close-icon.png";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  buttonClicked() {
    console.log("Close button has been clicked");
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className="Notifications">
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map((notification) => {
                    return (
                      <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        type={notification.type}
                        html={notification.html}
                        value={notification.value}
                        markAsRead={this.markAsRead}
                      />
                    );
                  })}
                </ul>
              </>
            )}
            <button
              style={{ align: "right", ariaLabel: "Close" }}
              onClick={this.buttonClicked}
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
  }
}
Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
Notification.protoType = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
export default Notification;
