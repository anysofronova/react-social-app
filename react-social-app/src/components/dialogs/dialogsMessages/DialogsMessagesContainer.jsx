import {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import DialogsMessages from "./DialogsMessages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsReducer.messagesData,
    newMessageText: state.dialogsReducer.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    messageChange: (text) => {
      dispatch(changeNewMessageTextActionCreator(text));
    },
  };
};

const DialogsMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsMessages);

export default DialogsMessagesContainer;
