import React from "react";
import "./dialogsMessages.scss";
import {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import DialogsMessages from "./DialogsMessages";

const DialogsMessagesContainer = ({ store }) => {
  const messageChange = (text) => {
    let action = changeNewMessageTextActionCreator(text);
    store.dispatch(action);
  };
  const addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };
  return (
    <DialogsMessages
      addMessage={addMessage}
      messageChange={messageChange}
      dialogsReducer={store.getState().dialogsReducer}
    />
  );
};

export default DialogsMessagesContainer;
