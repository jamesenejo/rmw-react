import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import isLoggedInAction from '../../actions/isLoggedInAction';
import '../../styles/css/general.scss';
import '../../styles/css/sign-up.scss';

class Signup extends Component {
  state = {
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
    error: []
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
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
      errors.push('Invlalid email');
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
    // Run validations
    const outcome = this.validateFormData(this.state);
    // If errors exist, update state
    if (typeof outcome === 'object') {
      return this.setState({ error: outcome }, () => console.log(this.state.loading, '&', this.state.error));
    }
    console.log('Sending user signup request...');
    this.setState({ loading: true }, () => this.sendSignupRequest(this.state));
  }

  sendSignupRequest = (userData) => {
    const { dispatch } = this.props;
    const {
      firstname, email, password, confirmPassword
    } = userData;

    const signupData = {
      firstname, email, password, confirmPassword
    };

    fetch('https://api-rmw.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      body: JSON.stringify(signupData),
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
          window.location.href = 'https://rmw-react.herokuapp.com';
        }
      })
      .catch(error => this.setState({ loading: false }, () => console.log(error)));
  }

  render() {
    const {
      firstname, email, password, confirmPassword, loading
    } = this.state;

    return (
      <div className="banner banner-signup">
        <div className="tint">
          <nav className="navigation-bar">
            <a className="navigation-brand" href="index.html">
              <img src="../../assets/img/logormww.png" alt="Logo" />
            </a>
          </nav>
          <SignupForm
            onChange={this.handleChange}
            onClick={this.handleSubmit}
            firstname={firstname}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Signup);
