import React from "react";
import "./dialogs.scss";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

function Dialogs() {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <div className="dialogs__list">
          <DialogItem name="Anna" id="1" />
          <DialogItem name="Vlad" id="2" />
          <DialogItem name="Misha" id="3" />
          <DialogItem name="Sergey" id="4" />
        </div>
        <div className="dialogs__messages">
          <MessageItem text="Hi" />
          <MessageItem text="How are you?" />
          <MessageItem text="What's up?" />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
