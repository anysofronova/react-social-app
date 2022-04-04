import React from "react";
import "./dialogs.scss";
import DialogsList from "./dialogsList/DialogsList";
import DialogsMessagesContainer from "./dialogsMessages/DialogsMessagesContainer";

function Dialogs({ store }) {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <DialogsList
          className="dialogs__list"
          dialogsData={store.getState().dialogsReducer.dialogsData}
        />
        <DialogsMessagesContainer store={store} />
      </div>
    </div>
  );
}

export default Dialogs;
