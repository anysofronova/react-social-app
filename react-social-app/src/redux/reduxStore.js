import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  sidebarReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
