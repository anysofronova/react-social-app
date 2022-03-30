import React from "react";
import "./dialogItem.scss";
import { Link } from "react-router-dom";
function DialogItem({ name, id }) {
  return (
    <div className="dialogs__item">
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </div>
  );
}

export default DialogItem;
