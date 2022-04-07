const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: "",
      };
    }
    case CHANGE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostTextActionCreator = (newText) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    newText,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export default profileReducer;
