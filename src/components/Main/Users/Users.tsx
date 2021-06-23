import React, { FC } from 'react';
import { UserType } from '../../../types/types';
import Paginator from '../../common/Paginator/Paginator';
import User from './User/User';
import style from './Users.module.css';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const Users: FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  ...props
}) => {
  return (
    <div className={style.content}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
