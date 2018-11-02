import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import FontLoading from 'Commons/FontLoading';
import loginCheck from 'Thunks/loginCheck';
import fetchAllRides from 'Thunks/fetchAllRides';
import Rides from './Rides';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/all-offers';

export class AllRides extends Component {
  componentDidMount() {
    const { checkLoginStatus, fetchRides } = this.props;

    checkLoginStatus();
    fetchRides();
  }

  state = {}

  render() {
    const { isLoggedIn, user, rides } = this.props;

    return (
      <div>
        <CommonNav isLoggedIn={isLoggedIn} user={user} />
        {rides.length ?
          <Rides rides={rides} /> :
          <FontLoading />
        }
      </div>
    );
  }
}

AllRides.propTypes = {
  fetchRides: PropTypes.func.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired,
  rides: PropTypes.arrayOf.isRequired
};


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  message: state.message,
  user: state.user,
  rides: state.rides,
  state
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(loginCheck()),
  fetchRides: () => dispatch(fetchAllRides())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRides);
