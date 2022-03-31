import React from "react";
import "./dialogs.scss";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import dialogsData from "../../data/dialogsData";
import messagesData from "../../data/messagesData";

function Dialogs() {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <div className="dialogs__list">
          {dialogsData.map((i) => (
            <DialogItem name={i.name} id={i.id} key={i.id} />
          ))}
        </div>
        <div className="dialogs__messages">
          {messagesData.map((i) => (
            <MessageItem message={i.message} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
