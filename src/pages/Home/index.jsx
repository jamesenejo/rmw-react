import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Relative imports
import HomeNav from './HomeNav';
import HomeContent from './HomeContent';

// Styles
import 'Styles/ride-offer-general';
import 'Styles/index';

class Home extends Component {
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
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Home);
