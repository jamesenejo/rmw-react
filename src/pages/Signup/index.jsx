import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MessageDiv from 'Commons/MessageDiv';
import authAction from 'Actions/authAction';
import loadingAction from 'Actions/loadingAction';
import messagesAction from 'Actions/messagesAction';
import SignupForm from './SignupForm';

import 'Styles/sign-up';
import logo from '../../assets/img/logormww.png';

class Signup extends Component {
  state = {
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    isSuccess: false
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  updateStateMessages = (array) => {
    const { updateMessages } = this.props;
    // display (update global state) with error messages
    updateMessages(array);

    // remove message from display after 4 seconds
    return setTimeout(() => {
      updateMessages([]);
    }, 4000);
  }

  validateFormData = (formData) => {
    const errors = [];
    const {
      firstname, email, password, confirmPassword
    } = formData;

    if (!firstname || firstname.trim() === '') {
      errors.push('First name is required');
    }
    if (!email || email.trim() === '') {
      errors.push('Invalid email');
    }
    if (!password || password.trim() === '') {
      errors.push('Password is required');
    }
    if (password !== confirmPassword) {
      errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
      return errors;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { loading } = this.props;

    // Run validations
    const outcome = this.validateFormData(this.state);
    // If errors exist, update state
    if (outcome) {
      return this.updateStateMessages(outcome);
    }
    // else send signup request
    loading(true); // activate loading spinner
    return this.sendSignupRequest(this.state);
  }

  sendSignupRequest = (userData) => {
    const { processSignup, history } = this.props;
    const {
      firstname, email, password, confirmPassword
    } = userData;

    const signupData = {
      firstname, email, password, confirmPassword
    };

    // send request to api
    return processSignup(signupData, history, 'signup');
  }

  render() {
    const {
      firstname, email, password, confirmPassword, isSuccess
    } = this.state;

    const { isLoading, messages } = this.props;

    return (
      <div className="banner banner-signup">
        <div className="tint">
          <nav className="navigation-bar">
            <Link to="/" className="navigation-brand">
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
          <MessageDiv
            messages={messages}
            isSuccess={isSuccess}
            style={{ opacity: messages.lenth ? '0' : '1' }}
          />
          <div className="content-wrapper">
            <div className="form">
              <div className="intro">
                <h2>Sign Up</h2>
              </div>
              <SignupForm
                onChange={this.handleChange}
                onClick={this.handleSubmit}
                firstname={firstname}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                loading={isLoading}
              />
              <div className="intro">
                <p>
                  Already a user?
                  <Link to="/login">Log in</Link>
                   instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.arrayOf.isRequired,
  processSignup: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  updateMessages: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  processSignup: (userData, history, authType) => dispatch(authAction(userData, history, authType)),
  loading: bool => dispatch(loadingAction(bool)),
  updateMessages: message => dispatch(messagesAction(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
