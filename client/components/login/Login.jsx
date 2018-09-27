import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginAction from '../../actions/loginAction'

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="dashboard">
        This is the login page.
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  login: state.login
});

export default connect(mapStateToProps)(Login);
