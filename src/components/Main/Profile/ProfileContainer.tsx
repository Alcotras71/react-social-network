import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { ProfileType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

type MapStatePropsType = {
  profile: ProfileType;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: () => void;
  savePhoto: () => void;
  saveProfile: () => void;
};
type OwnPropsType = {
  match: any;
  history: any;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render = () => {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  };
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
