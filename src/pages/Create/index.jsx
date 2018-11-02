import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import MessageDiv from 'Commons/MessageDiv';
import ProfileCompletenessIndicator from 'Commons/ProfileCompletenessIndicator';
import loading from 'Thunks/loading';
import messages from 'Thunks/messages';
import updateUser from 'Thunks/updateUser';
import create from 'Thunks/create';
import CannotCreate from './CannotCreate';
import CreateForm from './CreateForm';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/create';

class Create extends Component {
  componentDidMount() {
    const { updateUser, history } = this.props;

    updateUser(history);
  }

  state = {
    fromState: '',
    fromCity: '',
    toState: '',
    toCity: '',
    departureDate: '',
    departureTime: '',
    price: '',
    seats: '',
    pickupLocation: ''
  }

  handleChange = (e) => {
    const { target } = e;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loading, processCreate, history } = this.props;
    // Run validations
    const outcome = this.validateFormData(this.state);
    // If errors exist, update state
    if (outcome) {
      return this.updateStateMessages(outcome, false);
    }
    // else send signup request
    loading(true); // activate loading spinner
    return processCreate(this.state, history); // send request to api
  }

  updateStateMessages = (array, bool) => {
    const { updateMessages } = this.props;
    // display (update global state) with error messages
    updateMessages({ messages: array, isSuccess: bool });

    // remove message from display after 4 seconds
    return setTimeout(() => {
      updateMessages({ messages: [], isSuccess: false });
    }, 4000);
  }

  validateFormData = (formData) => {
    const errors = [];
    const {
      fromState,
      fromCity,
      toState,
      toCity,
      departureDate,
      departureTime,
      price,
      seats,
      pickupLocation
    } = formData;

    if (!fromState || fromState.trim() === '') {
      errors.push('Current State is required');
    }
    if (!fromCity || fromCity.trim() === '') {
      errors.push('Current City is required');
    }
    if (!toState || toState.trim() === '') {
      errors.push('Destination State is required');
    }
    if (!toCity || toCity.trim() === '') {
      errors.push('Destination City is required');
    }
    if (!departureDate || departureDate.trim() === '') {
      errors.push('Departure Date is required');
    }
    if (!departureTime || departureTime.trim() === '') {
      errors.push('Departure Time is required');
    }
    if (!price || price.trim() === '') {
      errors.push('Price is required');
    }
    if (!seats || seats.trim() === '') {
      errors.push('Number of seats is required');
    }
    if (!pickupLocation || pickupLocation.trim() === '') {
      errors.push('PickupLocation is required');
    }

    if (errors.length > 0) {
      return errors;
    }
    return false;
  }

  render() {
    const {
      isLoggedIn, message, user, isLoading
    } = this.props;
    const { completeness } = user;

    return (
      <div>
        <CommonNav
          isLoggedIn={isLoggedIn}
          user={user}
        />
        <MessageDiv
          message={message}
        />
        {
          completeness === '100%' ?
            '' : (<ProfileCompletenessIndicator completeness={completeness} />)
        }
        <div className="form">
          <div className="form-header">
            <h2>Edit profile</h2>
          </div>
          <div className="form-section">
            <div className="form-body" id="formBody">
              {
                completeness !== '100%' ?
                  <CannotCreate user={user} /> :
                  (
                    <CreateForm
                      loading={isLoading}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                    />
                  )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Create.propTypes = {
  updateUser: PropTypes.func.isRequired,
  processCreate: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  updateMessages: PropTypes.func.isRequired,
  history: PropTypes.arrayOf.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.shape.isRequired,
  user: PropTypes.shape.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  message: state.message,
  user: state.user,
  state
});

const mapDispatchToProps = dispatch => ({
  processCreate: (rideData, history) => dispatch(
    create(rideData, history)
  ),
  updateUser: history => dispatch(updateUser(history)),
  loading: bool => dispatch(loading(bool)),
  updateMessages: messageObject => dispatch(messages(messageObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
