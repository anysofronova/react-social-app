const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 85,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return { ...user };
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT_USERS:
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const changeCurrentPageAC = (currentPage) => ({
  type: CHANGE_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalUsersCount,
});

export default UsersReducer;
