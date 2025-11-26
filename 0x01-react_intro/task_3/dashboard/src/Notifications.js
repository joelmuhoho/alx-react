import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
// import closeIcon from "./close-icon.png";

const Notification = () => {
  function buttonClicked() {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="Priority-default">New course available</li>
        <li data="Priority-urgent">New resume available</li>
        <li
          data="Priority-urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
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
