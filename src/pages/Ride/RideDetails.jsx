import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RideDetails = (props) => {
  const { ride: { rideDetails, driver } } = props;
  return (
    <div>
      <div className="ride-offer-wrapper">
        <div className="ride-offer">
          <div className="offer-details">
            <div className="from">
              <h3 className="from-state">{rideDetails.fromState}</h3>
              <p className="from-city">{rideDetails.fromCity}</p>
            </div>
            <div className="arrow-icon">
              <span className="fa fa-long-arrow-right" />
            </div>
            <div className="to">
              <h3 className="to-state">{rideDetails.toState}</h3>
              <p className="to-city">{rideDetails.toCity}</p>
            </div>
          </div>
          <div className="offer-price">
            <h3>
              ₦
              <span>{rideDetails.price.toLocaleString()}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="view-offer-details">
        <div className="offer-items-container">
          <div className="offer-item-wrapper">
            <div className="offer-item">
              <span>Driver</span>
            </div>
            <div className="item-details">
              <Link to={`/users/${driver.id}`}>
                <span>{driver.firstname} {driver.lastname}</span>
              </Link>
            </div>
          </div>
          <div className="offer-item-wrapper">
            <div className="offer-item">
              <span>Seats shared</span>
            </div>
            <div className="item-details">
              <span>{rideDetails.seats}</span>
            </div>
          </div>
          <div className="offer-item-wrapper">
            <div className="offer-item">
              <span>Seats available</span>
            </div>
            <div className="item-details">
              <span>{rideDetails.seats}</span>
            </div>
          </div>
          <div className="offer-item-wrapper">
            <div className="offer-item">
              <span>Pickup location</span>
            </div>
            <div className="item-details">
              <span>{rideDetails.pickupLocation}</span>
            </div>
          </div>
          <div className="offer-item-wrapper">
            <div className="offer-item">
              <span>Departure Time</span>
            </div>
            <div className="item-details">
              <span>
                {rideDetails.departureTime}, {rideDetails.departureDate.split('T')[0]}
              </span>
            </div>
          </div>
          <div className="offer-item-wrapper">
            <div className="payment-information">
              <p>
                Please note that RideMyWay does not handle payments for rides.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="form-btn" id="submit">
          Join ride
          <i className="fa fa-spinner fa-spin" id="spinner" />
        </button>
      </div>
    </div>
  );
};

RideDetails.propTypes = {
  ride: PropTypes.shape.isRequired
};

export default RideDetails;
