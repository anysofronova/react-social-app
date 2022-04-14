import { connect } from "react-redux";
import { getFollow, getUnFollow, requestUsers } from "../../redux/usersReducer";
import React, { Component } from "react";
import Users from "./Users";
import PreLoader from "../UI/PreLoader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/selectors";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onchangeCurrentPage = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestUsers,
    getFollow,
    getUnFollow,
  }),
  withAuthRedirect
)(UsersContainer);
