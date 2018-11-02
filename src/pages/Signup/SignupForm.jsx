import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = (props) => {
  const {
    onChange, onClick, firstname, email, password, confirmPassword, loading
  } = props;

  return (
    <div className="form-body">
      <form>
        <div className="input-wrapper">
          <input type="text" name="firstname" id="firstname" placeholder="First Name" onChange={onChange} value={firstname} required />
        </div>
        <div className="input-wrapper">
          <input type="email" name="email" id="email" placeholder="Email address" onChange={onChange} value={email} required />
        </div>
        <div className="input-wrapper">
          <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={password} required />
        </div>
        <div className="input-wrapper">
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Type password again" onChange={onChange} value={confirmPassword} required />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="form-btn" id="submit" onClick={onClick}>
              Sign Up
            <i className="fa fa-spinner fa-spin" id="spinner" style={{ opacity: loading ? '1' : '0' }} />
          </button>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default SignupForm;
