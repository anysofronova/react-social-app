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
      return { ...state, ...action.data, isAuth: true };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export default authReducer;
