import React from "react";
import { useForm } from "react-hook-form";
import "./ProfileForm.scss";

const ProfileForm = ({
  editProfile,
  setEditMode,
  profile,
  error,
  editSuccess,
}) => {
  const { github, vk, website, youtube, mainLink } = profile.contacts;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: profile.fullName,
      aboutMe: profile.aboutMe,
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      "contacts.github": github,
      "contacts.vk": vk,
      "contacts.website": website,
      "contacts.youtube": youtube,
      "contacts.mainLink": mainLink,
    },
  });
  const onSubmit = async (data) => {
    const res = await editProfile(data);
    if (res === 16) return;
    setEditMode(false);
  };
  const onCancel = () => {
    setEditMode(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profileForm">
      {!editSuccess ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      <div className="fullName">
        <label>
          FullName:
          <input
            name="fullName"
            required={true}
            type="text"
            {...register("fullName")}
          />
        </label>
      </div>
      <div className="lookingForAJobDescription">
        <label>
          Professional Description:
          <input
            name="lookingForAJobDescription"
            required={true}
            type="text"
            {...register("lookingForAJobDescription")}
          />
        </label>
      </div>
      <div className="aboutMe">
        <label>
          About Me:
          <input
            name="aboutMe"
            required={true}
            type="text"
            {...register("aboutMe")}
          />
        </label>
      </div>
      <div className="lookingForAJob">
        <label>
          Looking for a job:
          <input
            name="lookingForAJob"
            type="checkbox"
            {...register("lookingForAJob")}
          />
        </label>
      </div>
      <div className="contact">
        <label>
          Github:
          <input
            name="contacts.github"
            type="text"
            {...register("contacts.github")}
          />
        </label>
        <label>
          Vk:
          <input name="contacts.vk" type="text" {...register("contacts.vk")} />
        </label>
        <label>
          Website:
          <input
            name="contacts.website"
            type="text"
            {...register("contacts.website")}
          />
        </label>
        <label>
          Youtube:
          <input
            name="contacts.youtube"
            type="text"
            {...register("contacts.youtube")}
          />
        </label>
        <label>
          Main Link:
          <input
            name="contacts.mainLink"
            type="text"
            {...register("contacts.mainLink")}
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
