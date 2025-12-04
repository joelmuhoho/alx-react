import "./NotificationItem.css";
import PropTypes from "prop-types";

const NotificationItem = ({ type = "default", html, value }) => {
  return (
    <li
      data-notification-type={type}
      value={value}
      dangerouslySetInnerHTML={html}
    ></li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};
export default NotificationItem;
