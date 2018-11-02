import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const {
    onChange, onClick, email, password, loading
  } = props;

  return (
    <div className="form-body">
      <form method="POST">
        <div className="input-wrapper">
          <input type="email" name="email" id="email" placeholder="Email address" onChange={onChange} value={email} required />
        </div>
        <div className="input-wrapper">
          <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={password} required />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="form-btn" id="submit" onClick={onClick}>
              Login
            <i className="fa fa-spinner fa-spin" id="spinner" style={{ opacity: loading ? '1' : '0' }} />
          </button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LoginForm;
