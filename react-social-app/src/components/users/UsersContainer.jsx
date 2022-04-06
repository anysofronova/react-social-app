import { connect } from "react-redux";
import {
  changeCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/usersReducer";
import React, { Component } from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((r) => {
        this.props.setUsers(r.data.items);
        this.props.setTotalUsersCount(r.data.totalCount);
      });
  }
  onchangeCurrentPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          pageNumber + 84
        }&count=${this.props.pageSize}`
      )
      .then((r) => this.props.setUsers(r.data.items));
  };

  render() {
    const { users, toggleFollow, totalUsersCount, pageSize, currentPage } =
      this.props;
    return (
      <Users
        users={users}
        toggleFollow={toggleFollow}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onchangeCurrentPage={this.onchangeCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    changeCurrentPage: (currentPage) => {
      dispatch(changeCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);

export default UsersContainer;
