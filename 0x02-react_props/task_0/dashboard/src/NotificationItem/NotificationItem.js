import "./NotificationItem.css";
const NotificationItem = (props) => {
  const { type, html, value } = props;
  return (
    <li
      data-notification-type={type}
      value={value}
      dangerouslySetInnerHTML={html}
    ></li>
  );
};
export default NotificationItem;
