import React from "react";
import NotificationItem from "../NotificationItem/NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "../NotificationItem/NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const opacityChange = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounce = {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    position: "absolute",
    right: "10px",
    background: "white",
    fontSize: "16px",
    cursor: "pointer",
    align: "right",
    ariaLabel: "Close",
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
    position: "fixed",
    right: "0",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    float: "right",
    ":hover": {
      animationName: [opacityChange, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  hide: {
    display: "none",
  },
});

class Notification extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className={css(
            styles.menuItem,
            this.props.displayDrawer && styles.hide
          )}
        >
          <p
            onClick={() => {
              this.props.handleDisplayDrawer();
            }}
          >
            Your notifications
          </p>
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
                        markNotificationAsRead={
                          this.props.markNotificationAsRead
                        }
                      />
                    );
                  })}
                </ul>
              </>
            )}
            <button
              onClick={() => {
                this.props.handleHideDrawer();
              }}
              className={css(styles.NotificationsCloseButton)}
            >
              X
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
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  markNotificationAsRead: (id) => {},
};
Notification.protoType = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func,
};
export default Notification;
