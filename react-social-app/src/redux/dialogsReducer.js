const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case CHANGE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeNewMessageTextActionCreator = (messageText) => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    messageText,
  };
};

export default dialogsReducer;
