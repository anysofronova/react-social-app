import React from "react";
import "./users.scss";
import UserItem from "./userItem/UserItem";
import Paginator from "../UI/paginator/Paginator";

const Users = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onchangeCurrentPage,
  followingInProgress,
  getFollow,
  getUnFollow,
}) => {
  return (
    <div className="users">
      <div className="users__wrapper">
        {users.map((i) => (
          <UserItem
            id={i.id}
            key={i.id}
            photos={i.photos}
            name={i.name}
            status={i.status}
            followed={i.followed}
            followingInProgress={followingInProgress}
            getFollow={getFollow}
            getUnFollow={getUnFollow}
          />
        ))}
        <Paginator
          onchangeCurrentPage={onchangeCurrentPage}
          currentPage={currentPage}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Users;
