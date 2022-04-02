import React, { createRef } from "react";
import MessageItem from "./messageItem/MessageItem";
import "./dialogsMessages.scss";
import {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../../redux/state";

const DialogsMessages = (props) => {
  const newMessageEl = createRef();
  const onMessageChange = () => {
    const newMessage = newMessageEl.current.value;
    let action = changeNewMessageTextActionCreator(newMessage);
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
          ref={newMessageEl}
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
