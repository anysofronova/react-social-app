import { getAddMessage } from "../../../redux/dialogsReducer";
import DialogsMessages from "./DialogsMessages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsReducer.messagesData,
  };
};

const DialogsMessagesContainer = connect(mapStateToProps, { getAddMessage })(
  DialogsMessages
);

export default DialogsMessagesContainer;
