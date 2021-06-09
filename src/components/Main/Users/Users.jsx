import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User/User';
import style from './Users.module.css';

let Users = ({ totalUsersCount, pageSize, onPageChanged, currentPage, users, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.content}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {users.map((user) => <User key={user.id} user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)}
    </div>
  );
};

export default Users;
