import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLink45Deg,
  BsPeopleFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import "./Contacts.scss";

const Contacts = ({ contacts }) => {
  return (
    <div className="profile__contacts">
      {contacts["github"] ? (
        <a
          href={contacts["github"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      ) : null}
      {contacts["vk"] ? (
        <a href={contacts["vk"]} target={"_blank"} rel="noopener noreferrer">
          <BsPeopleFill />
        </a>
      ) : null}
      {contacts["facebook"] ? (
        <a
          href={contacts["facebook"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
      ) : null}
      {contacts["twitter"] ? (
        <a
          href={contacts["twitter"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      ) : null}
      {contacts["youtube"] ? (
        <a
          href={contacts["youtube"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
      ) : null}
      {contacts["website"] ? (
        <a
          href={contacts["website"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <CgWebsite />
        </a>
      ) : null}
      {contacts["mainLink"] ? (
        <a
          href={contacts["mainLink"]}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsLink45Deg />
        </a>
      ) : null}
    </div>
  );
};

export default Contacts;
