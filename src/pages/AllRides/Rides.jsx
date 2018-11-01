import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Rides = (props) => {
  const { rides } = props;
  return (
    <div className="view-offer" id="allRidesHook">
      <div className="rides-header">All Ride offers</div>
      {typeof rides[0] === 'string' ? rides[0] : rides.map(ride => (
        <Link to={`rides/${ride.id}`} className="ride-offer-wrapper" key={ride.id}>
          <div className="ride-offer">
            <div className="offer-details">
              <div className="from">
                <h3 className="from-state">{ride.fromState}</h3>
                <p className="from-city">{ride.fromCity}</p>
              </div>
              <div className="arrow-icon">
                <span className="fa fa-long-arrow-right" />
              </div>
              <div className="to">
                <h3 className="to-state">{ride.toState}</h3>
                <p className="to-city">{ride.toCity}</p>
              </div>
            </div>
            <div className="offer-price">
              <h3>₦<span>{ride.price}</span></h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

Rides.propTypes = {
  rides: PropTypes.arrayOf.isRequired
};

export default Rides;
