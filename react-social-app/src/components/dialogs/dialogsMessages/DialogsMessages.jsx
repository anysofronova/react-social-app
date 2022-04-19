import React, { useState } from "react";
import MessageItem from "./messageItem/MessageItem";
import "./dialogsMessages.scss";

const DialogsMessages = ({ getAddMessage, messagesData }) => {
  const onMessageChange = (e) => setMessage(e.currentTarget.value);
  const onAddMessage = () => {
    getAddMessage(message);
    setMessage("");
  };
  const [message, setMessage] = useState("");
  return (
    <div className="dialogs__messages">
      {messagesData.map((i) => (
        <MessageItem message={i.message} key={i.id} />
      ))}
      <div className="dialogs__messages_add">
        <textarea
          onChange={onMessageChange}
          className="dialogs____textarea"
          value={message}
        />

        <button onClick={onAddMessage}>Send</button>
      </div>
    </div>
  );
};

export default DialogsMessages;
