import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import { follow, unfollow, requestUsers } from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNum) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNum, pageSize);
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  };
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
    follow,
    unfollow,
  })
)(UsersContainer);
