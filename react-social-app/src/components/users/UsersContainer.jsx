import { connect } from "react-redux";
import {
  changeCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  toggleIsFetching,
} from "../../redux/usersReducer";
import React, { Component } from "react";
import axios from "axios";
import Users from "./Users";
import PreLoader from "../UI/PreLoader";

class UsersAPIContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((r) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(r.data.items);
        this.props.setTotalUsersCount(r.data.totalCount);
      });
  }

  onchangeCurrentPage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.changeCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          pageNumber + 84
        }&count=${this.props.pageSize}`
      )
      .then((r) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(r.data.items);
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  changeCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;
