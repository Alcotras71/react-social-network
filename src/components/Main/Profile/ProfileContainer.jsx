import React from 'react';
import Profile from './Profile';
import connect from 'react-redux/lib/connect/connect';
import { setUserProfile } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render = () => {
    return <Profile {...this.props} profile={this.props.profile} />;
  };
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainer);
