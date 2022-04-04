import React from "react";
import "./dialogs.scss";
import DialogsList from "./dialogsList/DialogsList";
import DialogsMessagesContainer from "./dialogsMessages/DialogsMessagesContainer";

function Dialogs({ dialogsData }) {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <DialogsList
          className="dialogs__list"
          dialogsData={dialogsData}
        />
        <DialogsMessagesContainer />
      </div>
    </div>
  );
}

export default Dialogs;
