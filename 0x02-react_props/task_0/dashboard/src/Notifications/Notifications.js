import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "../NotificationItem/NotificationItem";
// import closeIcon from "./close-icon.png";

const Notification = () => {
  function buttonClicked() {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem
          type="default"
          html={{ __html: "New course available" }}
          value=""
        />
        <NotificationItem
          type="urgent"
          html={{ __html: "New resume available" }}
          value=""
        />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
          value=""
        />
      </ul>
      <button
        style={{ align: "right", ariaLabel: "Close" }}
        onClick={buttonClicked}
      >
        {/* <img src={closeIcon} alt="close icon"/> */}X
      </button>
    </div>
  );
};
export default Notification;
