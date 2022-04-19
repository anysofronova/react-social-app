const ADD_MESSAGE = "ADD_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: action.messageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessage = (messageText) => ({
  type: ADD_MESSAGE,
  messageText,
});

export const getAddMessage = (messageText) => {
  return (dispatch) => {
    dispatch(addMessage(messageText));
  };
};

export default dialogsReducer;
