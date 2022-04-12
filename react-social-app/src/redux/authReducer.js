import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  id: 2,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAuth = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.me().then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const getLogIn = ({ email, password, rememberMe }) => {
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      }
    });
  };
};
export const getLogOut = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.logOut().then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
