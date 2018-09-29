import React from 'react';
import HomeNav from './HomeNav';
import '../../styles/css/master.scss';
import '../../styles/css/ride-offer-general.scss';
import '../../styles/css/index.scss';

const Home = () => (
  <div className="banner">
    <div className="tint">
      <HomeNav />
      <div className="content-wrapper">
        <div className="mantra">
          <h1>
            Travel more
            <span>,</span>
            spend less
          </h1>
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
          <a href="#refBestRideOffers">See ride offers</a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
