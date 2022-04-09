import { connect } from "react-redux";
import {
  changeCurrentPage,
  getFollow,
  getUnFollow,
  getUsers,
} from "../../redux/usersReducer";
import React, { Component } from "react";
import Users from "./Users";
import PreLoader from "../UI/PreLoader";

class UsersAPIContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onchangeCurrentPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    const {
      users,
      totalUsersCount,
      pageSize,
      currentPage,
      isFetching,
      followingInProgress,
      getFollow,
      getUnFollow,
    } = this.props;

    return (
      <>
        {isFetching ? <PreLoader /> : null}

        <Users
          users={users}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onchangeCurrentPage={this.onchangeCurrentPage}
          followingInProgress={followingInProgress}
          getFollow={getFollow}
          getUnFollow={getUnFollow}
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
  changeCurrentPage,
  getUsers,
  getFollow,
  getUnFollow,
})(UsersAPIContainer);

export default UsersContainer;
