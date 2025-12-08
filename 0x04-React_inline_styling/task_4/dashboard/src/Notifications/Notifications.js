import React from "react";
import NotificationItem from "../NotificationItem/NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "../NotificationItem/NotificationItemShape";
// import closeIcon from "./close-icon.png";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  Notifications: {
    position: "absolute",
    right: "10px",
    // border: "1.5px dotted red",
    // padding: "2px",
    background: "white",
    "@media (max-width: 900px)": {
      height: "100%",
      width: "100%",
      fontSize: "20px",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: "0 0 0 5px",
    },
  },
  p: {
    "@media (max-width: 900px)": {
      padding: "0 0 0 10px",
    },
  },
  NotificationsCloseButton: {
    position: "absolute",
    right: "10px",
    top: "10px",
    border: "none",
    background: "none",
    fontSize: "16px",
    cursor: "pointer",
    align: "right",
    ariaLabel: "Close",
  },
  menuItem: {
    textAlign: "right",
  },
});

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length !== this.props.listNotifications.length
    );
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
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.Notifications)}>
            {this.props.listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p className={css(styles.p)}>
                  Here is the list of notifications
                </p>
                <ul className={css(styles.ul)}>
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
              onClick={this.buttonClicked}
              className={css(styles.NotificationsCloseButton)}
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
