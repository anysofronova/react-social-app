import React from "react";
import "./dialogs.scss";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <div className="dialogs__list">
          {props.messagesPage.dialogsData.map((i) => (
            <DialogItem name={i.name} id={i.id} key={i.id} />
          ))}
        </div>
        <div className="dialogs__messages">
          {props.messagesPage.messagesData.map((i) => (
            <MessageItem message={i.message} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
