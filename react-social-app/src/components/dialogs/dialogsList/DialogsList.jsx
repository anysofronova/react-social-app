import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import "./dialogsList.scss";

const DialogsList = ({ dialogsData }) => {
  return (
    <div className="dialogs__list">
      {dialogsData.map((i) => (
        <DialogItem name={i.name} id={i.id} key={i.id} />
      ))}
    </div>
  );
};

export default DialogsList;
