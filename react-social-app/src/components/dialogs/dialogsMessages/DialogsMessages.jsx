import React from "react";
import MessageItem from "./messageItem/MessageItem";
import "./dialogsMessages.scss";

const DialogsMessages = ({ messageChange, addMessage, dialogsReducer }) => {
  const onMessageChange = (e) => messageChange(e.target.value);
  const onAddMessage = () => addMessage();

  return (
    <div className="dialogs__messages">
      {dialogsReducer.messagesData.map((i) => (
        <MessageItem message={i.message} key={i.id} />
      ))}
      <div className="dialogs__messages_add">
        <textarea
          onChange={onMessageChange}
          className="dialogs____textarea"
          value={dialogsReducer.newMessageText}
        />

        <button onClick={onAddMessage}>Send</button>
      </div>
    </div>
  );
};

export default DialogsMessages;
