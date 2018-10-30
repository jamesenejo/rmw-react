import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import MessageDiv from 'Commons/MessageDiv';
import FontLoading from 'Commons/FontLoading';
import ProfileCompletenessIndicator from 'Commons/ProfileCompletenessIndicator';
import messagesAction from 'Actions/messagesAction';
import updateUserAction from 'Actions/updateUserAction';
import ProfileData from './ProfileData';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/profile';

class Profile extends Component {
  state = {}

  componentDidMount() {
    const { updateUser, history } = this.props;

    return updateUser(history);
  }

  render() {
    const { isLoggedIn, user } = this.props;
    console.log(user);

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
  messages: state.messages,
  user: state.user,
  state
});

const mapDispatchToProps = dispatch => ({
  updateUser: history => dispatch(updateUserAction(history)),
  updateMessages: arrayOfMessages => dispatch(messagesAction(arrayOfMessages))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
