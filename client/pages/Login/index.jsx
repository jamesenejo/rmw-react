import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Relative imports
import MessageDiv from 'Commons/MessageDiv';
import loginAction from 'Actions/loginAction';
import loadingAction from 'Actions/loadingAction';
import messagesAction from 'Actions/messagesAction';
import LoginForm from './LoginForm';

// style imports
import 'Styles/login.scss';


class Login extends Component {
  componentDidMount() {
    if (window.location.search.substr(1) === 'rd') {
      this.updateStateMessages(['Please login']);
    }
  }

  state = {
    email: '',
    password: '',
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

    updateMessages(array);

    return setTimeout(() => {
      updateMessages([]);
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
    this.sendLoginRequest(this.state);
  }

  sendLoginRequest = (userData) => {
    const { processLogin, loading, history } = this.props;
    const { email, password } = userData;

    loading(true); // to activate loading spinner
    processLogin({ email, password }, history);

  //   window.fetch('http://localhost:7000/api/v1/auth/login', {
  //     method: 'POST',
  //     body: JSON.stringify(loginData),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.status === 'success') {
  //         dispatch(isLoggedInAction({ isLoggedIn: true }));
  //         this.setState({ isSuccess: true }, () => {
  //           this.updateStateMessages([res.message]);
  //           window.location.href = 'http://localhost:8000/dashboard';
  //         });
  //       }
  //       this.updateStateMessages([res.message]);
  //       return dispatch(isLoadingAction(false));
  //     })
  //     .catch(error => dispatch(messagesAction([error])));
  }

  render() {
    const { email, password, isSuccess } = this.state;
    const { isLoading, messages } = this.props;

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
  history: PropTypes.array.isRequired,
  processLogin: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  updateMessages: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  processLogin: (userData, history) => dispatch(loginAction(userData, history)),
  loading: bool => dispatch(loadingAction(bool)),
  updateMessages: message => dispatch(messagesAction(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
