import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const AUTH_ERROR = "AUTH_ERROR";
const INITIALIZED_SUCCESS = "INITIALIZE_SUCCESS";
const GET_CAPTCHA = "GET_CAPTCHA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  loginSuccess: true,
  error: "",
  initializedSuccess: false,
  captcha: null,
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
    case GET_CAPTCHA:
      return { ...state, captcha: action.url };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth, captcha) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth, captcha },
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
export const setCaptcha = (url) => ({
  type: GET_CAPTCHA,
  url,
});

export const getAuth = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.me();
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    const { id, email, login, captcha } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true, captcha));
  }
};

export const getLogIn =
  ({ email, password, rememberMe, captcha }) =>
  async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(setAuthError(true));
      dispatch(getAuth());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      dispatch(setAuthError(false, response.data.messages[0]));
    }
  };

export const getLogOut = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.logOut();
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};
export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuth());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.captcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
};

export default authReducer;
