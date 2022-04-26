import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const LIKE_TOGGLE_POST = "LIKE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_ERROR = "SET_ERROR";

let initialState = {
  postsData: [
    {
      id: 5,
      post: "С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.",
      likesCount: 1023,
      isLiked: false,
    },
    {
      id: 4,
      post: "Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу.",
      likesCount: 319,
      isLiked: false,
    },
    {
      id: 3,
      post: "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
      likesCount: 238,
      isLiked: false,
    },
    {
      id: 2,
      post: "С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.",
      likesCount: 194,
      isLiked: false,
    },
    {
      id: 1,
      post: "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.",
      likesCount: 739,
      isLiked: false,
    },
  ],
  profile: null,
  status: "",
  error: null,
  editSuccess: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData[0].id + 1,
        post: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };
    }
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.postId),
      };
    case LIKE_TOGGLE_POST:
      return {
        ...state,
        postsData: state.postsData.map((post) => {
          if (post.id === action.postId) {
            post.isLiked ? post.likesCount-- : post.likesCount++;
            post.isLiked = !post.isLiked;
          }
          return post;
        }),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile }, photos: action.file };
    case SET_ERROR:
      return { ...state, editSuccess: action.editSuccess, error: action.error };
    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const likeTogglePost = (postId) => {
  return {
    type: LIKE_TOGGLE_POST,
    postId,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};
export const savePhotoSuccess = (file) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    file,
  };
};
export const setError = (editSuccess, error) => {
  return {
    type: SET_ERROR,
    editSuccess,
    error,
  };
};

export const getAddPost = (newPostText) => (dispatch) => {
  dispatch(addPost(newPostText));
};
export const getDeletePost = (postId) => (dispatch) => {
  dispatch(deletePost(postId));
};
export const getLikeTogglePost = (postId) => (dispatch) => {
  dispatch(likeTogglePost(postId));
};

export const getProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};
export const updateUserStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.data.resultCode === 0) dispatch(setUserStatus(status));
};
export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.data.resultCode === 0) dispatch(savePhotoSuccess(file));
};
export const editProfile = (info) => async (dispatch, getState) => {
  const userId = getState().authReducer.id;
  const data = await profileAPI.editProfile(info);
  if (data.data.resultCode === 0) {
    dispatch(getProfile(userId));
    dispatch(setError(true, null));
  } else {
    dispatch(setError(false, data.data.messages[0]));
  }
};

export default profileReducer;
