import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as axios from 'axios';
import {
  setUserData,
  setUserPhoto,
  toggleIsFetching,
} from '../../redux/authReducer';
import Header from './Header';
import Preloader from '../common/Preloader/Preloader';
import { authAPI, profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    authAPI.getAuth().then((data) => {
      this.props.toggleIsFetching(false);
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        this.props.setUserData(id, email, login);

        profileAPI.getProfile(id).then((data) => {
          this.props.setUserPhoto(data.photos.small);
        });
      }
    });
  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Header {...this.props} />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, {
  setUserData,
  setUserPhoto,
  toggleIsFetching,
})(HeaderContainer);
