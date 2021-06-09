import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import photo from '../../../../assets/images/fake.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, updateStatus, status }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <>
        <div className={s.descriptionBlock}>
          <img
            src={profile.photos.large ? profile.photos.large : photo}
            alt="mysefl"
          />
          <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
          <h2 style={{ textTransform: 'uppercase', fontWeight: 700 }}>
            {profile.fullName}
          </h2>
          <h3>{profile.aboutMe}</h3>
        </div>
      </>
    );
  }
};

export default ProfileInfo;
