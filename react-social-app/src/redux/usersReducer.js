import { userAPI } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: [],
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
    case SET_TOTAL_COUNT_USERS:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await userAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) dispatch(toggleFollow(userId));
  dispatch(toggleFollowingProgress(false, userId));
};
export const getFollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI));
};
export const getUnFollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unFollow.bind(userAPI));
};

export default UsersReducer;
