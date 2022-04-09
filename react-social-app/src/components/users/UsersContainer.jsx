import { connect } from "react-redux";
import {
  changeCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  toggleFollowingProgress,
  toggleIsFetching,
} from "../../redux/usersReducer";
import React, { Component } from "react";
import Users from "./Users";
import PreLoader from "../UI/PreLoader";
import { userAPI } from "../../api/api";

class UsersAPIContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((r) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(r.items);
      this.props.setTotalUsersCount(r.totalCount);
    });
  }

  onchangeCurrentPage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.changeCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((r) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(r.items);
    });
  };

  render() {
    const {
      users,
      toggleFollow,
      totalUsersCount,
      pageSize,
      currentPage,
      isFetching,
      followingInProgress,
      toggleFollowingProgress,
    } = this.props;

    return (
      <>
        {isFetching ? <PreLoader /> : null}

        <Users
          users={users}
          toggleFollow={toggleFollow}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onchangeCurrentPage={this.onchangeCurrentPage}
          followingInProgress={followingInProgress}
          toggleFollowingProgress={toggleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  changeCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersAPIContainer);

export default UsersContainer;
