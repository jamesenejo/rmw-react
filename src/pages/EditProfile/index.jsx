import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import MessageDiv from 'Commons/MessageDiv';
import FontLoading from 'Commons/FontLoading';
import ProfileCompletenessIndicator from 'Commons/ProfileCompletenessIndicator';
import loading from 'Thunks/loading';
import messages from 'Thunks/messages';
import updateUser from 'Thunks/updateUser';
import editProfile from 'Thunks/editProfile';
import EditForm from './EditForm';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/create';

class EditProfile extends Component {
  componentDidMount() {
    const { updateUser, history } = this.props;

    updateUser(history);
  }

  componentDidUpdate() {
    const { updated } = this.state;
    const { user } = this.props.state;

    if (!updated && user.firstname) {
      const {
        firstname, lastname, email, gender, phone, city, state
      } = user;

      console.log(firstname);

      this.setState({
        firstname, lastname, email, gender, phone, city, state, updated: true
      });
    }
  }

  firstnameRef = React.createRef();
  lastnameRef = React.createRef(); /* eslint-disable-line */
  emailRef = React.createRef(); /* eslint-disable-line */
  genderRef = React.createRef(); /* eslint-disable-line */
  phoneRef = React.createRef(); /* eslint-disable-line */
  cityRef = React.createRef(); /* eslint-disable-line */
  stateRef = React.createRef(); /* eslint-disable-line */

  state = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phone: '',
    city: '',
    state: '',
    updated: false
  }

  handleChange = (e) => {
    console.log('you');
    const { target } = e;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  getValues = () => ({
    firstname: this.firstnameRef.current.value,
    lastname: this.lastnameRef.current.value,
    email: this.emailRef.current.value,
    gender: this.genderRef.current.value,
    phone: this.phoneRef.current.value,
    city: this.cityRef.current.value,
    state: this.stateRef.current.value
  })

  handleSubmit = (e) => {
    e.preventDefault();
    const { loading, processUpdate, history } = this.props;

    const formData = this.getValues();
    // Run validations
    const outcome = this.validateFormData(formData);
    // If errors exist, update state
    if (outcome) {
      return this.updateStateMessages(outcome, false);
    }
    // else send signup request
    loading(true); // activate loading spinner
    return processUpdate(formData, history); // send request to api
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
      firstname, lastname, email, gender, phone, city, state
    } = formData;
    const emailRegex =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (!firstname || firstname.trim() === '') {
      errors.push('Firstname is required');
    }
    if (!lastname || lastname.trim() === '') {
      errors.push('Lastname is required');
    }
    if (!email || email.trim() === '') {
      errors.push('Email address is required');
    }
    if (!emailRegex.test(email)) {
      errors.push('Email address is invalid');
    }
    if (!gender || gender.trim() === '') {
      errors.push('Choose a gender');
    }
    if (!phone || phone.trim() === '') {
      errors.push('Phone number is required');
    }
    if (!city || city.trim() === '') {
      errors.push('City is required');
    }
    if (!state || state.trim() === '') {
      errors.push('State is required');
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
            {user ?
              (
                <EditForm
                  user={this.state}
                  firstnameRef={this.firstnameRef}
                  lastnameRef={this.lastnameRef}
                  emailRef={this.emailRef}
                  genderRef={this.genderRef}
                  phoneRef={this.phoneRef}
                  cityRef={this.cityRef}
                  stateRef={this.stateRef}
                  loading={isLoading}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              ) : <FontLoading />
            }
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  updateUser: PropTypes.func.isRequired,
  processUpdate: PropTypes.func.isRequired,
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
  processUpdate: (userData, history) => dispatch(
    editProfile(userData, history)
  ),
  updateUser: history => dispatch(updateUser(history)),
  loading: bool => dispatch(loading(bool)),
  updateMessages: messageObject => dispatch(messages(messageObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
