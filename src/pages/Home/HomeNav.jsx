import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logormww.png';

const HomeNav = (props) => {
  const { isLoggedIn } = props;

  return (
    <nav className="navigation-bar">
      <Link to="/" className="navigation-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navigation">
        {isLoggedIn ? (
          <ul className="navigation-ul">
            <li className="navigation-li">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="navigation-li" id="logout">Log out</li>
          </ul>
        ) :
          (
            <ul className="navigation-ul">
              <li className="navigation-li"><Link to="/login">Login</Link></li>
              <li className="navigation-li"><Link to="/signup">Sign Up</Link></li>
            </ul>
          )}
      </div>
    </nav>
  );
};

HomeNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default HomeNav;
