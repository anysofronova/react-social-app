import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const AUTH_ERROR = "AUTH_ERROR";
const INITIALIZED_SUCCESS = "INITIALIZE_SUCCESS";

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  loginSuccess: true,
  error: "",
  initializedSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case AUTH_ERROR:
      return {
        ...state,
        loginSuccess: action.loginSuccess,
        error: action.error,
      };
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initializedSuccess: true,
      };
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
export const setAuthError = (loginSuccess, error) => ({
  type: AUTH_ERROR,
  loginSuccess,
  error,
});
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const getAuth = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.me().then((response) => {
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
        dispatch(setAuthError(true));
        dispatch(getAuth());
      } else {
        dispatch(setAuthError(false, response.data.messages[0]));
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
export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuth());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default authReducer;
