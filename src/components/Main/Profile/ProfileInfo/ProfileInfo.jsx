import React, { useState } from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import photo from '../../../../assets/images/fake.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileData/ProfileDataForm';

const ProfileInfo = ({
  profile,
  updateStatus,
  status,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  } else {
    const mainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };

    const onSubmit = async (formData, actions) => {
      await saveProfile(formData, actions);
      setEditMode(false);
    };

    return (
      <>
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large || photo} alt="mysefl" />
          {isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
          <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
          {editMode ? (
            <ProfileDataForm profile={profile} handleSubmit={onSubmit} />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
      </>
    );
  }
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <ul className={s.aboutMe}>
      {isOwner && (
        <li>
          <button
            style={{
              padding: '5px 20px',
              backgroundColor: 'grey',
              color: 'white',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={goToEditMode}
          >
            Edit
          </button>
        </li>
      )}
      <h2
        style={{
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'yellow',
        }}
      >
        {profile.fullName}
      </h2>
      <li>
        <span>Looking for a job</span> : {profile.lookingForAJob ? 'yes' : 'no'}
      </li>
      <li>
        <span>My professional skills</span> :{' '}
        {profile.lookingForAJobDescription}
      </li>
      <li>
        <span>About me</span> : {profile.aboutMe}
      </li>
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ textTransform: 'uppercase' }}>Contacts</span> :{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </ul>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li style={{ marginRight: '15px' }}>
      <span>{contactTitle}</span> :{' '}
      <a href={contactValue} target="_blank" rel="noreferrer">
        {contactValue}
      </a>
    </li>
  );
};

export default ProfileInfo;
