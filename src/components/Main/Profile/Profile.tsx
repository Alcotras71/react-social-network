import React, { FC } from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../../types/types';

type PropsType = {
  isOwner: boolean;
  status: string;
  updateStatus: (newStatus: string) => void;
  profile: ProfileType;
  savePhoto: () => void;
  saveProfile: () => void;
};

const Profile: FC<PropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        profile={props.profile}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
