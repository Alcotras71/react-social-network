import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import photo from '../../../../assets/images/fake.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    const mainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0])
      }
    }

    return (
      <>
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large || photo} alt="mysefl" />
          {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
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
