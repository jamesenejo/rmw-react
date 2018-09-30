import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Relative imports
import LoginForm from './LoginForm';
import MessageDiv from '../utils/MessageDiv';
import isLoggedInAction from '../../actions/isLoggedInAction';

// style imports
import '../../styles/css/login.scss';


class Login extends Component {
  state = {
    email: '',
    password: '',
    isSuccess: false,
    loading: false,
    messages: []
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  updateStateMessages = (array, bool) => {
    const loading = bool || false;

    this.setState({ messages: array, loading });
    return setTimeout(() => {
      this.setState({ messages: [] });
    }, 4000);
  }

  validateFormData = (formData) => {
    const errors = [];
    const { email, password } = formData;
    const emailRegex =
    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (!emailRegex.test(email)) {
      errors.push('Valid email address required');
    }
    if (!password || password.trim() === '') {
      errors.push('Password is required');
    }

    if (errors.length > 0) {
      return errors;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Run validations
    const outcome = this.validateFormData(this.state);
    // If errors exist, update state
    if (outcome) {
      return this.updateStateMessages(outcome);
    }
    this.setState({ loading: true }, () => this.sendLoginRequest(this.state));
  }

  sendLoginRequest = (userData) => {
    const { dispatch } = this.props;
    const { email, password } = userData;

    const loginData = { email, password };

    window.fetch('https://api-rmw.herokuapp.com/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          dispatch(isLoggedInAction({ isLoggedIn: true }));
          this.setState({ messages: [res.message], isSuccess: true }, () => {
            window.location.href = 'https://rmw-react.herokuapp.com';
          });
        }
        return this.updateStateMessages([res.message]);
      })
      .catch(error => this.updateStateMessages([error]));
  }

  render() {
    const {
      email, password, loading, messages, isSuccess
    } = this.state;

    return (
      <div className="banner banner-login">
        <div className="tint">
          <nav className="navigation-bar">
            <Link to="/" className="navigation-brand">
              <img src="../../assets/img/logormww.png" alt="Logo" />
            </Link>
          </nav>
          <MessageDiv
            messages={messages}
            isSuccess={isSuccess}
            style={{ opacity: messages.lenth ? '0' : '1' }}
          />
          <div className="content-wrapper">
            <div className="form-header text-center">
              <h2>Login</h2>
            </div>
            <LoginForm
              onChange={this.handleChange}
              onClick={this.handleSubmit}
              email={email}
              password={password}
              loading={loading}
            />
            <div className="form-footer">
              <div className="forgot-password">
                <Link to="#">Forgot password?</Link>
              </div>
              <div className="sign-up">
                <Link to="sign-up.html">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Login);
