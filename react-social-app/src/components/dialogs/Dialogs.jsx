import React from "react";
import "./dialogs.scss";
import DialogsList from "./dialogsList/DialogsList";
import DialogsMessagesContainer from "./dialogsMessages/DialogsMessagesContainer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function Dialogs({ dialogsData }) {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <DialogsList className="dialogs__list" dialogsData={dialogsData} />
        <DialogsMessagesContainer />
      </div>
    </div>
  );
}

export default compose(connect(), withAuthRedirect)(Dialogs);
