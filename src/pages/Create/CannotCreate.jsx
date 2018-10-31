import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CannotCreate = (props) => {
  const { user: { firstname } } = props;

  return (
    <div className="no-running">
      We are so sorry
      {firstname}
      , you cannot create a ride yet because your profile is less than 100%.
      Please
      <Link to="/profile/edit">update</Link>
    your profile information and upload a clear profile picture, then try again.
    </div>
  );
};

CannotCreate.propTypes = {
  user: PropTypes.shape.isRequired
};

export default CannotCreate;
