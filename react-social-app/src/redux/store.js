import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          post: "С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.",
          likesCount: 1023,
        },
        {
          id: 2,
          post: "Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу.",
          likesCount: 319,
        },
        {
          id: 3,
          post: "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
          likesCount: 238,
        },
        {
          id: 4,
          post: "С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.",
          likesCount: 194,
        },
        {
          id: 5,
          post: "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.",
          likesCount: 739,
        },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
    sidebar: {},
  },
  _callRender() {
    console.log("hi");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callRender = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callRender(this._state);
  },
};

export default store;
