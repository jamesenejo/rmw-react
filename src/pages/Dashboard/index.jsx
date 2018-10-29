import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import MessageDiv from 'Commons/MessageDiv';
import FontLoading from 'Commons/FontLoading';
import ProfileCompletenessIndicator from 'Commons/ProfileCompletenessIndicator';
import isLoggedInAction from 'Actions/isLoggedInAction';
import messagesAction from 'Actions/messagesAction';
import updateUserAction from 'Actions/updateUserAction';
import updateDashAction from 'Actions/updateDashAction';
import RideOffer from './RideOffer';
import RideBooking from './RideBooking';
import RideHistoryStat from './RideHistoryStat';
import RideHistory from './RideHistory';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';

class Dashboard extends Component {
  componentDidMount() {
    const { updateUser, updateDasboard, history } = this.props;

    updateUser(history);
    updateDasboard(history);
  }

  state = {}

  updateStateMessages = (array) => {
    const { dispatch } = this.props;
    // display messages
    dispatch(messagesAction(array));

    // clear messages
    return setTimeout(() => {
      dispatch(messagesAction([]));
    }, 4000);
  }

  render() {
    const {
      isLoggedIn,
      messages,
      user: { imgUrl, completeness },
      userDash: { runningOffer, runningJoinRequest }
    } = this.props;

    return (
      <div>
        <CommonNav
          isLoggedIn={isLoggedIn}
          imgUrl={imgUrl}
        />
        <MessageDiv
          messages={messages}
          isSuccess={false}
        />

        {
          completeness === '100%' ?
            '' : (<ProfileCompletenessIndicator completeness={completeness} />)
        }

        <div className="dash-container">
          <div className="indicators">
            <div className="currently-running">
              <div className="header">
                <h3>Currently Running</h3>
              </div>
              <div className="running-offer">
                <div className="sub-header">
                  <h4>Ride Offer</h4>
                </div>
                {!runningOffer ?
                  <FontLoading /> :
                  <RideOffer runningOffer={runningOffer} />}
              </div>
              <div className="running-booking">
                <div className="sub-header">
                  <h4>Ride Bookings</h4>
                </div>
                {!runningJoinRequest ?
                  <FontLoading /> :
                  <RideBooking runningJoinRequest={runningJoinRequest} />}
              </div>
              <RideHistoryStat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  userDash: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  messages: state.messages,
  user: state.user,
  userDash: state.userDash
});

const mapDispatchToProps = dispatch => ({
  updateUser: history => dispatch(updateUserAction(history)),
  updateDasboard: history => dispatch(updateDashAction(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
