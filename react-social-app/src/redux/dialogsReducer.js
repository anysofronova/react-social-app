const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Anna" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Natasha" },
  ],
  messagesData: [
    {
      id: 1,
      message:
        "Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.",
    },
    {
      id: 2,
      message:
        "Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.",
    },
    {
      id: 3,
      message:
        "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.",
    },
    {
      id: 4,
      message:
        "Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.",
    },
    {
      id: 5,
      message:
        "Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };
    }
    case CHANGE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.messageText };
    }
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
