import React from "react";
import "./users.scss";
import UserItem from "./userItem/UserItem";

const Users = ({
  users,
  toggleFollow,
  totalUsersCount,
  pageSize,
  currentPage,
  onchangeCurrentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i === 20) break;
  }
  return (
    <div className="users">
      <div className="users__wrapper">
        <div className="users_buttons">
          {pages.map((i) => (
            <button
              onClick={() => onchangeCurrentPage(i)}
              key={i}
              className={currentPage === i ? "selectedPage" : ""}
            >
              {i}
            </button>
          ))}
        </div>

        {users.map((i) => (
          <UserItem
            id={i.id}
            key={i.id}
            photos={i.photos}
            name={i.name}
            status={i.status}
            followed={i.followed}
            toggleFollow={toggleFollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
