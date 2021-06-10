import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      deactivateEditMode();
    }
  };

  return (
    <div className={s.profileStatus}>
      {!editMode ? (
        <div>
          Status :{' '}
          <span onDoubleClick={activateEditMode}>
            {props.status || '-----------'}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            onKeyDown={handleKeyDown}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
