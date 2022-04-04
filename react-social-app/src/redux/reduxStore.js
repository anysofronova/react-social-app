import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
