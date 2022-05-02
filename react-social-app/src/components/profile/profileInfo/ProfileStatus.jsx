import React, { useEffect, useState } from "react";

const ProfileStatus = ({ updateUserStatus, status, isOwner }) => {
  let [editMode, setEditMode] = useState(false);
  let [newStatus, setNewStatus] = useState(status);

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  const toggleEditMode = () => {
    if (!isOwner) return;
    if (editMode) updateUserStatus(newStatus);
    setEditMode(!editMode);
  };
  const onStatusChange = (e) => {
    setNewStatus(e.currentTarget.value);
  };

  return (
    <div className="profileStatus">
      {editMode ? (
        <input
          value={newStatus}
          type="text"
          className="profileStatus__input"
          onBlur={toggleEditMode}
          autoFocus={true}
          placeholder="Put your status"
          onChange={onStatusChange}
        />
      ) : (
        <div className="profileStatus__status" onDoubleClick={toggleEditMode}>
          {status || "The user has hidden the information"}
        </div>
      )}
      {isOwner ? (
        <p style={{ fontSize: "10px", color: "grey" }}>
          DoubleClick to change status
        </p>
      ) : null}
    </div>
  );
};

export default ProfileStatus;
