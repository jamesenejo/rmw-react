import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import dateToWords from 'Helpers/dateToWords';
import to12hrFormat from 'Helpers/to12hrFormat';

const RideBooking = (props) => {
  const { runningJoinRequest } = props;

  return (
    <div className="ride-summary" id="rideBooking">
      { typeof runningJoinRequest === 'string' ?
        (
          <p className="no-running">
            {runningJoinRequest}
            <Link to="/rides" className="no-running-ref"> Join a ride</Link>
          </p>
        ) :
        (
          <div>
            <div className="trip">
              <span>{runningJoinRequest.fromState}</span>
              <i className="fa fa-long-arrow-right" />
              <span>{runningJoinRequest.toState}</span>
            </div>
            <div className="departure">
              <p>
                Departure Date:
                { dateToWords(runningJoinRequest.departureDate) }
              </p>
              <p>
                Departure Time:
                { to12hrFormat(runningJoinRequest.departureTime) }
              </p>
            </div>
            <div className="btn-container">
              <Link to="/all-offers">See details</Link>
            </div>
          </div>
        ) }
    </div>
  );
};

RideBooking.propTypes = {
  runningJoinRequest: PropTypes.object.isRequired
};

export default RideBooking;
