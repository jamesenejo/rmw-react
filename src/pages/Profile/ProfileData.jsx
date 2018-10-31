import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultAvatar from '../../assets/img/user-avatar.jpg';
import CompletenessBar from './CompletenessBar';

const ProfileData = (props) => {
  const {
    firstname, lastname, email, gender, imgUrl, completeness, phone, city, state
  } = props;

  return (
    <div className="profile-body" id="profileBody">
      <div className="profile-section left">
        <div className="profile-image">
          <div className="image">
            <img src={imgUrl || defaultAvatar} alt="User avatar" />
          </div>
          <div className="btn-container">
            <Link to="/profile/upload">Change image</Link>
          </div>
        </div>
        <CompletenessBar completeness={completeness} />
      </div>
      <div className="in-between" />
      <div className="profile-section right">
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>First Name</span>
          </div>
          <div className="item-details">
            <span>{firstname}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>Last Name</span>
          </div>
          <div className="item-details">
            <span>{lastname}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>Gender</span>
          </div>
          <div className="item-details">
            <span>{gender}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>Email address</span>
          </div>
          <div className="item-details">
            <span>{email}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>Mobile Number</span>
          </div>
          <div className="item-details">
            <span>{phone}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>City</span>
          </div>
          <div className="item-details">
            <span>{city}</span>
          </div>
        </div>
        <div className="profile-item-wrapper">
          <div className="profile-item">
            <span>State</span>
          </div>
          <div className="item-details">
            <span>{state}</span>
          </div>
        </div>
        <div className="btn-container">
          <Link to="/profile/edit">Edit</Link>
        </div>
      </div>
    </div>
  );
};

ProfileData.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  completeness: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default ProfileData;
