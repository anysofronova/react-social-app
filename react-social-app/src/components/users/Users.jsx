import React from "react";
import UserItem from "./userItem/UserItem";
import "./users.scss";
import axios from "axios";

const Users = ({ users, toggleFollow, setUsers }) => {
  const onSetUsers = () => {
    if (users.length < 6) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((r) => setUsers([...r.data.items]));
    }
  };

  return (
    <div className="users">
      <div className="users__wrapper">
        {users.length < 6 ? (
          <button className="users__btn" onClick={onSetUsers}>
            Get users
          </button>
        ) : null}

        {users.map((i) => (
          <UserItem
            id={i.id}
            key={i.id}
            photos={i.photos}
            name={i.name}
            location={i.location ? i.location : null}
            status={i.status}
            followed={i.followed}
            toggleFollow={toggleFollow}
          />
        ))}
        {users.length >= 6 ? (
          <button className="users__btn">Show more</button>
        ) : null}
      </div>
    </div>
  );
};

export default Users;
