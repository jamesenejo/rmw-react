import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileCompletenessIndicator extends Component {
  state = {
    width: '75px',
    display: 'none',
    opacity: '0'
  }

  handleClick = () => {
    const { width } = this.state;
    if (width === '75px') {
      this.setState({ width: '240px' });
      setTimeout(() => {
        this.setState({ display: 'inline-block' });
        setTimeout(() => {
          this.setState({ opacity: '1' });
        }, 50);
      }, 400);
    } else {
      this.setState({ opacity: '0' });
      setTimeout(() => {
        this.setState({ display: 'none' });
        this.setState({ width: '75px' });
      }, 400);
    }
  }

  render() {
    const { width, display, opacity } = this.state;
    const { completeness } = this.props;
    let backgroundColor;

    if (completeness === '33%') {
      backgroundColor = 'rgb(180,20,0)';
    }
    if (completeness === '88%') {
      backgroundColor = 'rgb(120,170,0)';
    }

    return (
      <div
        className="profile-completeness"
        style={{ width, opacity: '1' }}
        onClick={this.handleClick}
        role="presentation"
      >
        <p id="profileCompletenessIndicator" style={{ backgroundColor }}>
          { completeness }
        </p>
        <div
          id="description"
          style={{ display, opacity }}
        >
          <p>Profile completeness:</p>
          <Link to="/profile/edit">Update</Link>
        </div>
      </div>
    );
  }
}

ProfileCompletenessIndicator.propTypes = {
  completeness: PropTypes.string.isRequired
};

export default ProfileCompletenessIndicator;
