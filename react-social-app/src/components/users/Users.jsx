import React from "react";
import UserItem from "./userItem/UserItem";
import "./users.scss";

const Users = ({ users, toggleFollow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        photoURL:
          "https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg",
        fullName: "Anna",
        location: { city: "Moscow", country: "Russia" },
        status: "some info 1",
        followed: true,
      },
      {
        id: 2,
        photoURL:
          "https://www.pinclipart.com/picdir/big/48-488554_power-golf-therapy-has-played-a-major-role.png",
        fullName: "Misha",
        location: { city: "Moscow", country: "Russia" },
        status: "some info 2",
        followed: false,
      },
      {
        id: 3,
        photoURL:
          "https://lux-wine.ru/wp-content/uploads/2016/12/user_icon.png",
        fullName: "Sergey",
        location: { city: "Milan", country: "Italy" },
        status: "some info 3",
        followed: false,
      },
      {
        id: 4,
        photoURL:
          "https://www.seekpng.com/png/detail/46-463314_v-th-h-user-profile-icon.png",
        fullName: "Vlad",
        location: { city: "Lviv", country: "Ukraine" },
        status: "some info 4",
        followed: true,
      },
      {
        id: 5,
        photoURL:
          "https://www.pinclipart.com/picdir/big/127-1278830_william-flat-user-png-clipart.png",
        fullName: "Natasha",
        location: { city: "Saint-Petersburg", country: "Russia" },
        status: "some info 5",
        followed: false,
      },
    ]);
  }

  return (
    <div className="users">
      <div className="users__wrapper">
        {users.map((i) => (
          <UserItem
            id={i.id}
            key={i.id}
            photoURL={i.photoURL}
            fullName={i.fullName}
            location={i.location}
            status={i.status}
            followed={i.followed}
            toggleFollow={toggleFollow}
          />
        ))}
        <button className="users__btn">Show more</button>
      </div>
    </div>
  );
};

export default Users;
