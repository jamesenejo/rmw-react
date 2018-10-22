import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => (
  <div className="content-wrapper">
    <div className="mantra">
      <h1>Travel more, spend less</h1>
    </div>
    <div className="search-area">
      <div className="search-wrapper">
        <div className="tip">
          <p>Want to make a trip? A ride is just a search away.</p>
        </div>
        <div className="search-form">
          <form method="POST">
            <input type="search" placeholder="where are you headed?" />
            <button type="submit">Search a ride</button>
          </form>
        </div>
      </div>
    </div>
    <div className="btn-container">
      <Link to="#refBestRideOffers">See ride offers</Link>
    </div>
  </div>
);

export default HomeContent;
