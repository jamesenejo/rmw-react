import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import loginCheck from 'Actions/loginCheck';

// Relative imports
import HomeNav from './HomeNav';
import HomeContent from './HomeContent';

// Styles
import 'Styles/ride-offer-general';
import 'Styles/index';

class Home extends Component {
  componentDidMount() {
    const { checkLoginStatus } = this.props;

    // updates global state with user's login status
    checkLoginStatus();
  }

  state = {}

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="banner banner-home">
        <div className="tint">
          <HomeNav userLoginStatus={isLoggedIn} />
          <HomeContent />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  checkLoginStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(loginCheck())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
