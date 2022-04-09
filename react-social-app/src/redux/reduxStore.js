import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  sidebarReducer,
  authReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
