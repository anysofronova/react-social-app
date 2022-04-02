const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.postsData.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };
      state.postsData.unshift(newPost);
      state.newPostText = "";
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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

export default profileReducer;
