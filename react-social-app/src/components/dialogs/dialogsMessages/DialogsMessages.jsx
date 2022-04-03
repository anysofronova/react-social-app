import React from "react";
import MessageItem from "./messageItem/MessageItem";
import "./dialogsMessages.scss";
import {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";

const DialogsMessages = (props) => {
  const onMessageChange = (e) => {
    let action = changeNewMessageTextActionCreator(e.target.value);
    props.dispatch(action);
  };
  return (
    <div className="dialogs__messages">
      {props.messagesPage.messagesData.map((i) => (
        <MessageItem message={i.message} key={i.id} />
      ))}
      <div className="dialogs__messages_add">
        <textarea
          onChange={onMessageChange}
          className="dialogs____textarea"
          value={props.messagesPage.newMessageText}
        />

        <button onClick={() => props.dispatch(addMessageActionCreator())}>
          Send
        </button>
      </div>
    </div>
  );
};

export default DialogsMessages;
