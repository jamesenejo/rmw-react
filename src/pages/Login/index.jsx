import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Relative imports
import MessageDiv from 'Commons/MessageDiv';
import auth from 'Thunks/auth';
import loading from 'Thunks/loading';
import messages from 'Thunks/messages';
import LoginForm from './LoginForm';
import logo from '../../assets/img/logormww.png';

// style imports
import 'Styles/login.scss';

class Login extends Component {
  componentDidMount() {
    // if user was redirected due to failed authentication
    // display a login message
    if (window.location.search.substr(1) === 'rd') {
      this.updateStateMessages(['Please login'], false);
    }
  }

  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  updateStateMessages = (array, bool) => {
    const { updateMessages } = this.props;

    updateMessages({ messages: array, isSuccess: bool });

    return setTimeout(() => {
      updateMessages({ messages: [], isSuccess: true });
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
      return this.updateStateMessages(outcome, false);
    }
    this.sendLoginRequest(this.state);
  }

  sendLoginRequest = (userData) => {
    const { processLogin, loading, history } = this.props;
    const { email, password } = userData;

    loading(true); // activate loading spinner
    return processLogin({ email, password }, history, 'login');
  }

  render() {
    const { email, password } = this.state;
    const { isLoading, message } = this.props;

    return (
      <div className="banner banner-login">
        <div className="tint">
          <nav className="navigation-bar">
            <Link to="/" className="navigation-brand">
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
          <MessageDiv
            message={message}
            style={{ opacity: message.messages.lenth ? '0' : '1' }}
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
              loading={isLoading}
            />
            <div className="form-footer">
              <div className="forgot-password">
                <Link to="#">Forgot password?</Link>
              </div>
              <div className="sign-up">
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.arrayOf.isRequired,
  processLogin: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  updateMessages: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.shape.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  processLogin: (userData, history, authType) => dispatch(
    auth(userData, history, authType)
  ),
  loading: bool => dispatch(loading(bool)),
  updateMessages: messageObject => dispatch(messages(messageObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
