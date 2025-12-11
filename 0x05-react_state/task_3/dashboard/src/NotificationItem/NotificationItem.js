import PropTypes from "prop-types";
import { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: { color: "blue" },
  urgent: { color: "#e0354b" },
  NotificationItem: {
    "@media (max-width: 900px)": {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
      listStyle: "none",
    },
  },
});
class NotificationItem extends PureComponent {
  render() {
    return (
      <li
        className={css(
          this.props.type === "default" ? styles.default : styles.urgent,
          styles.NotificationItem
        )}
        data-notification-type={this.props.type}
        value={this.props.value}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(this.props.id)}
      ></li>
    );
  }
}
NotificationItem.defaultProps = {
  type: "default",
  markAsRead: (id) => {},
};
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};
export default NotificationItem;
