import React from "react";
import "./dialogs.scss";
import DialogsList from "./dialogsList/DialogsList";
import DialogsMessages from "./dialogsMessages/DialogsMessages";

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <DialogsList
          className="dialogs__list"
          dialogsData={props.messagesPage.dialogsData}
        />
        <DialogsMessages
          className="dialogs__messages"
          messagesPage={props.messagesPage}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}

export default Dialogs;
