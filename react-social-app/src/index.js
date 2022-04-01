import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.callbackFun(renderEntireTree);
