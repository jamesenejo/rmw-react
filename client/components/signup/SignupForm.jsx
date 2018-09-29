import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = (props) => {
  const {
    onChange, onClick, firstname, email, password, confirmPassword, loading
  } = props;

  return (
    <div className="form">
      <div className="intro">
        <h2>Sign Up</h2>
      </div>
      <p id="message" />
      <div className="form-body">
        <form>
          <div className="input-wrapper">
            <input type="text" name="firstname" placeholder="First Name" onChange={onChange} value={firstname} required />
          </div>
          <div className="input-wrapper">
            <input type="email" name="email" placeholder="Email address" onChange={onChange} value={email} required />
          </div>
          <div className="input-wrapper">
            <input type="password" name="password" placeholder="Password" onChange={onChange} value={password} required />
          </div>
          <div className="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="Type password again" onChange={onChange} value={confirmPassword} required />
          </div>
          <div className="btn-wrapper">
            <button type="submit" className="form-btn" onClick={onClick}>
                Sign Up
              <i className="fa fa-spinner fa-spin" id="spinner" style={{ opacity: loading ? '1' : '0' }} />
            </button>
          </div>
        </form>
      </div>
      <div className="intro">
        <p>
          Already a user?
          <a href="login.html">Log in</a>
          instead.
        </p>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired
};

export default SignupForm;
