import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../../assets/images/fake.png';
import style from '../Users.module.css';

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="userPhoto"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{'user.location.city'}</div>
          <div>{'user.location.country'}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
