import "./NotificationItem.css";
import PropTypes from "prop-types";
import { PureComponent } from "react";
class NotificationItem extends PureComponent {
  render() {
    return (
      <li
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
