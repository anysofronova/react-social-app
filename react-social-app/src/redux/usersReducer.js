const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = { users: [] };
const usersInfo = [
  {
    id: 1,
    photos: {
      small:
        "https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg",
    },
    name: "Anna",
    location: { city: "Moscow", country: "Russia" },
    status: "Cause knew answer numerous concern only.",
    followed: true,
  },
  {
    id: 2,
    photos: {
      small:
        "https://www.pinclipart.com/picdir/big/48-488554_power-golf-therapy-has-played-a-major-role.png",
    },
    name: "Misha",
    location: { city: "Moscow", country: "Russia" },
    status: "Long giving chapter as longer when however.",
    followed: false,
  },
  {
    id: 3,
    photos: {
      small: "https://lux-wine.ru/wp-content/uploads/2016/12/user_icon.png",
    },
    name: "Sergey",
    location: { city: "Milan", country: "Italy" },
    status: "Cousins exposed three astonished busy began prospect.",
    followed: false,
  },
  {
    id: 4,
    photos: {
      small:
        "https://www.seekpng.com/png/detail/46-463314_v-th-h-user-profile-icon.png",
    },
    name: "Vlad",
    location: { city: "Lviv", country: "Ukraine" },
    status: " Are continuing snug talked like child.",
    followed: true,
  },
  {
    id: 5,
    photos: {
      small:
        "https://www.pinclipart.com/picdir/big/127-1278830_william-flat-user-png-clipart.png",
    },
    name: "Natasha",
    location: { city: "Saint-Petersburg", country: "Russia" },
    status: "Joy out manners.",
    followed: false,
  },
];

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
        users: [...state.users, ...usersInfo, ...action.users],
      };

    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default UsersReducer;
