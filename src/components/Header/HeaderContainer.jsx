import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/authReducer';
import Header from './Header';
import Preloader from '../common/Preloader/Preloader';

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
