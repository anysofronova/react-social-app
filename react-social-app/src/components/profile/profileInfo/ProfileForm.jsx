import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ProfileForm.scss";

const ProfileForm = ({
  editProfile,
  setEditMode,
  profile,
  error,
  editSuccess,
}) => {
  const { register, handleSubmit } = useForm();
  const { fullName, aboutMe, lookingForAJobDescription, contacts } = profile;
  const [fullNameInp, setFullNameInp] = useState(fullName);
  const [aboutMeInp, setAboutMeInp] = useState(aboutMe);
  const [lookingForAJobDescriptionInp, setLookingForAJobDescriptionInp] =
    useState(lookingForAJobDescription);
  const [github, setGithub] = useState(contacts.github);
  const [vk, setVk] = useState(contacts.vk);
  const [website, setWebsite] = useState(contacts.website);
  const [youtube, setYoutube] = useState(contacts.youtube);
  const [mainLink, setMainLink] = useState(contacts.mainLink);
  const onSubmit = async (data) => {
    await editProfile(data);
    if (editSuccess) return;
    setEditMode(false);
  };
  const onCancel = () => {
    setEditMode(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profileForm">
      <p style={{ color: "red" }}>Error: {editSuccess ? "" : error}</p>
      <div className="fullName">
        <label>
          FullName:
          <input
            required={true}
            type="text"
            {...register("fullName")}
            value={fullNameInp}
            onChange={(e) => setFullNameInp(e.currentTarget.value)}
          />
        </label>
      </div>
      <div className="lookingForAJobDescription">
        <label>
          Professional Description:
          <input
            required={true}
            type="text"
            {...register("lookingForAJobDescription")}
            value={lookingForAJobDescriptionInp}
            onChange={(e) =>
              setLookingForAJobDescriptionInp(e.currentTarget.value)
            }
          />
        </label>
      </div>
      <div className="aboutMe">
        <label>
          About Me:
          <input
            required={true}
            type="text"
            {...register("aboutMe")}
            value={aboutMeInp}
            onChange={(e) => setAboutMeInp(e.currentTarget.value)}
          />
        </label>
      </div>
      <div className="lookingForAJob">
        <label>
          Looking for a job:
          <input type="checkbox" {...register("lookingForAJob")} />
        </label>
      </div>
      <div className="contact">
        <label>
          Github:
          <input
            type="text"
            {...register("contacts.github")}
            value={github}
            onChange={(e) => setGithub(e.currentTarget.value)}
          />
        </label>
        <label>
          Vk:
          <input
            type="text"
            {...register("contacts.vk")}
            value={vk}
            onChange={(e) => setVk(e.currentTarget.value)}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            {...register("contacts.website")}
            value={website}
            onChange={(e) => setWebsite(e.currentTarget.value)}
          />
        </label>
        <label>
          Youtube:
          <input
            type="text"
            {...register("contacts.youtube")}
            value={youtube}
            onChange={(e) => setYoutube(e.currentTarget.value)}
          />
        </label>
        <label>
          Main Link:
          <input
            type="text"
            {...register("contacts.mainLink")}
            value={mainLink}
            onChange={(e) => setMainLink(e.currentTarget.value)}
          />
        </label>
      </div>
      <div className="profileForm__buttons">
        <button className="btn__save">Save</button>
        <button onClick={onCancel} className="btn__cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
