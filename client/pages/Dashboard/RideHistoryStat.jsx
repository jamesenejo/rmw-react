import React from 'react';
import { Link } from 'react-router-dom';

const RideHistoryStat = (props) => {
  const { someProps } = props;

  return (
    <div className="history">
      <div className="header">
        <Link to="#ridesHistory" />
        <h3>Rides Statistics</h3>
      </div>
      <div className="statistics-group">
        <div className="statistics">
          <div className="sub-header">
            <h4>Rides Offered</h4>
          </div>
          <div className="fa fa-share" />
          <div className="stat-item">
            <Link to="/offered">
              <p>25</p>
            </Link>
          </div>
        </div>
        <div className="statistics">
          <div className="sub-header">
            <h4>Rides Taken</h4>
          </div>
          <div className="fa fa-reply" />
          <div className="stat-item">
            <Link to="/taken">
              <p>19</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="btn-container" style={{ marginTop: '30px' }}>
        <Link to="/all-offers">See all history</Link>
      </div>
    </div>
  );
};

export default RideHistoryStat;
