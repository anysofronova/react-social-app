import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  sidebarReducer,
  authReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
