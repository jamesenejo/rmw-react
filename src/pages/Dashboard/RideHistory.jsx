import React from 'react';
import { Link } from 'react-router-dom';

const RideHistory = (props) => {
  const { someProps } = props;

  return (
    <div className="dash-section">
      <h1 id="ridesHistory">Recent Ride History</h1>
      <div className="section-wrapper">
        <Link to="#" className="ride-offer-wrapper">
          <div className="ride-type">
            <i className="fa fa-share" />
          </div>
          <div className="ride-offer">
            <div className="offer-details">
              <div className="from">
                <h3 className="from-state">Lagos</h3>
                <p className="from-city">Gbagada</p>
              </div>
              <div className="arrow-icon">
                <span className="fa fa-long-arrow-right" />
              </div>
              <div className="to">
                <h3 className="to-state">Oyo</h3>
                <p className="to-city">Bodija</p>
              </div>
            </div>
            <div className="offer-price">
              <h3>
                ₦
                <span>2,500</span>
              </h3>
            </div>
          </div>
        </Link>
        <Link to="#" className="ride-offer-wrapper">
          <div className="ride-type">
            <i className="fa fa-reply" />
          </div>
          <div className="ride-offer">
            <div className="offer-details">
              <div className="from">
                <h3 className="from-state">Lagos</h3>
                <p className="from-city">Gbagada</p>
              </div>
              <div className="arrow-icon">
                <span className="fa fa-long-arrow-right" />
              </div>
              <div className="to">
                <h3 className="to-state">Ondo</h3>
                <p className="to-city">Ore</p>
              </div>
            </div>
            <div className="offer-price">
              <h3>
                ₦
                <span>3,500</span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RideHistory;
