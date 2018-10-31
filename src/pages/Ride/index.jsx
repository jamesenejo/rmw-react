import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import FontLoading from 'Commons/FontLoading';
import loginCheck from 'Actions/loginCheck';
import fetchARideAction from 'Actions/fetchARideAction';
import messagesAction from 'Actions/messagesAction';
import RideDetails from './RideDetails';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/ride-offer';

class Ride extends Component {
  componentDidMount() {
    const {
      checkLoginStatus, fetchRide, match: { params: { rideId } }
    } = this.props;

    checkLoginStatus();
    fetchRide(rideId);
  }

  state = {}

  render() {
    const { isLoggedIn, user, ride } = this.props;

    return (
      <div>
        <CommonNav isLoggedIn={isLoggedIn} user={user} />
        <div className="view-offer" id="viewRideHook">
          {!ride.rideDetails ?
            <FontLoading /> :
            <RideDetails ride={ride} />}
        </div>
      </div>
    );
  }
}

Ride.propTypes = {
  fetchRide: PropTypes.func.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired,
  ride: PropTypes.shape.isRequired,
  match: PropTypes.shape.isRequired
};


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  message: state.message,
  user: state.user,
  ride: state.ride
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(loginCheck()),
  updateMessages: messageObject => dispatch(messagesAction(messageObject)),
  fetchRide: id => dispatch(fetchARideAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ride);
