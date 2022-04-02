import React from "react";
import "./messageItem.scss";

function MessageItem({ message }) {
  return (
    <div className="message">
      <div className="message__item">{message}</div>
    </div>
  );
}

export default MessageItem;
