import React from "react";
import "./dialogs.scss";
import { Link } from "react-router-dom";

function Dialogs() {
  return (
    <div className="dialogs">
      <div className="dialogs__wrapper">
        <div className="dialogs__list">
          <div className="dialogs__item">
            <Link to="/dialogs/1">Anna</Link>
          </div>
          <div className="dialogs__item">
            <Link to="/dialogs/2">Vlad</Link>
          </div>
          <div className="dialogs__item">
            <Link to="/dialogs/3">Misha</Link>
          </div>
          <div className="dialogs__item">
            <Link to="/dialogs/4">Sergey</Link>
          </div>
        </div>
        <div className="dialogs__messages">
          <div className="dialogs__message">Hi</div>
          <div className="dialogs__message">How are you?</div>
          <div className="dialogs__message">What's up?</div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
