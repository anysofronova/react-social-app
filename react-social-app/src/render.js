import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";

export let renderEntireTree = (props) => {
  ReactDOM.render(
    <App
      profilePage={props.profilePage}
      messagesPage={props.messagesPage}
      addPost={addPost}
    />,
    document.getElementById("root")
  );
};
