import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  toggleEditMode = () => {
    if (this.state.editMode) this.props.updateUserStatus(this.state.status);
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className="profileStatus">
        {this.state.editMode ? (
          <input
            value={this.state.status}
            type="text"
            className="profileStatus__input"
            onBlur={this.toggleEditMode}
            autoFocus={true}
            placeholder="Put your status"
            onChange={this.onStatusChange}
          />
        ) : (
          <div
            className="profileStatus__status"
            onDoubleClick={this.toggleEditMode}
          >
            {this.props.status || "The user has hidden the information"}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
