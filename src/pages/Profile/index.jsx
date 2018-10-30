import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import FontLoading from 'Commons/FontLoading';
import updateUserAction from 'Actions/updateUserAction';
import ProfileData from './ProfileData';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/profile';

class Profile extends Component {
  componentDidMount() {
    const { updateUser, history } = this.props;

    return updateUser(history);
  }

  state = {}

  render() {
    const { isLoggedIn, user } = this.props;

    return (
      <div>
        <CommonNav
          isLoggedIn={isLoggedIn}
          user={user}
        />
        <div className="profile">
          <div className="profile-header">
            <h2>Profile</h2>
          </div>
          {user ? <ProfileData {...user} /> : <FontLoading />}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.arrayOf.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: history => dispatch(updateUserAction(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
