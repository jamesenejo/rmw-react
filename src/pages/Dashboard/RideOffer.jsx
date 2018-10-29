import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import dateToWords from 'Helpers/dateToWords';
import to12hrFormat from 'Helpers/to12hrFormat';

const RideOffer = (props) => {
  const { runningOffer } = props;

  return (
    <div className="ride-summary" id="rideSummary">
      { typeof runningOffer === 'string' ?
        (
          <p className="no-running">
            {runningOffer}
            <Link to="/create" className="no-running-ref"> Create a ride</Link>
          </p>
        ) :
        (
          <div>
            <div className="trip">
              <span>{runningOffer.fromState}</span>
              <i className="fa fa-long-arrow-right" />
              <span>{runningOffer.toState}</span>
            </div>
            <div className="departure">
              <p>
                Departure Date:
                { dateToWords(runningOffer.departureDate) }
              </p>
              <p>
                Departure Time:
                { to12hrFormat(runningOffer.departureTime) }
              </p>
            </div>
            <div className="btn-container">
              <Link to="/responses">See details</Link>
            </div>
          </div>
        ) }
    </div>
  );
};

RideOffer.propTypes = {
  runningOffer: PropTypes.object.isRequired
};

export default RideOffer;
