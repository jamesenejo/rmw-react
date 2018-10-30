import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/img/user-avatar.jpg';

const CommonUserNav = (props) => {
  const { imgUrl } = props;

  return (
    <div className="user-navigation">
      <div className="user-nav-wrapper">
        <Link to="/create">
          <div className="dash-icon">
            <i className="fa fa-plus" />
          </div>
        </Link>
        <Link to="#">
          <div className="dash-icon">
            <i className="fa fa-bell" />
          </div>
        </Link>
        <Link to="#">
          <div className="dash-icon">
            <i className="fa fa-envelope" />
          </div>
        </Link>
        <Link to="/profile">
          <div className="dash-icon">
            <i className="fa fa-user" />
          </div>
        </Link>
      </div>
      <div className="user" id="userNavToggler">
        <div className="user-wrapper">
          <div className="avatar">
            <img
              id="userAvatar"
              src={imgUrl || defaultAvatar}
              alt="Avatar"
            />
          </div>
          <div className="caret">
            <i className="fa fa-caret-down" />
          </div>
          <div className="dropdown" id="userNav">
            <ul className="dropdown-ul">
              <li className="dropdown-li"><Link to="/profile">Profile</Link></li>
              <li className="dropdown-li"><Link to="#">Notification</Link></li>
              <li className="dropdown-li"><Link to="#">Messages</Link></li>
              <li className="dropdown-li"><Link to="/create">Offer a ride</Link></li>
              <li className="dropdown-li"><Link to="/history">Ride history</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

CommonUserNav.propTypes = {
  imgUrl: PropTypes.string.isRequired
};

export default CommonUserNav;
