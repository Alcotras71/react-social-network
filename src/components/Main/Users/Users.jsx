import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/fake.png';
import style from './Users.module.css';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.content}>
      <div className={style.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? style.selectedPage : null}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div className={style.card} key={u.id}>
            <div className={style.image}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="userPhoto"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => props.unfollow(u.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => props.follow(u.id)}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={style.description}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
