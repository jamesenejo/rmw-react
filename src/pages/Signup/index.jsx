// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
//
// import SignupForm from './SignupForm';
// import MessageDiv from 'Commons/MessageDiv';
// import isLoggedInAction from 'Actions/isLoggedInAction';
// import isLoadingAction from 'Actions/isLoadingAction';
// import messagesAction from 'Actions/messagesAction';
//
// import 'Styles/sign-up';
//
// class Signup extends Component {
//   state = {
//     firstname: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     isSuccess: false
//   };
//
//   handleChange = (event) => {
//     const { target } = event;
//     const { value, name } = target;
//
//     this.setState({
//       [name]: value
//     });
//   }
//
//   updateStateMessages = (array) => {
//     const { dispatch } = this.props;
//
//     dispatch(messagesAction(array));
//
//     return setTimeout(() => {
//       dispatch(messagesAction([]));
//     }, 4000);
//   }
//
//   validateFormData = (formData) => {
//     const errors = [];
//     const {
//       firstname, email, password, confirmPassword
//     } = formData;
//
//     if (!firstname || firstname.trim() === '') {
//       errors.push('First name is required');
//     }
//     if (!email || email.trim() === '') {
//       errors.push('Invalid email');
//     }
//     if (!password || password.trim() === '') {
//       errors.push('Password is required');
//     }
//     if (password !== confirmPassword) {
//       errors.push('Passwords do not match');
//     }
//
//     if (errors.length > 0) {
//       return errors;
//     }
//     return false;
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     const { dispatch } = this.props;
//
//     // Run validations
//     const outcome = this.validateFormData(this.state);
//     // If errors exist, update state
//     if (outcome) {
//       return this.updateStateMessages(outcome);
//     }
//     // else send signup request
//     dispatch(isLoadingAction(true)); // to activate loading spinner
//     this.sendSignupRequest(this.state);
//   }
//
//   sendSignupRequest = (userData) => {
//     const { dispatch } = this.props;
//     const {
//       firstname, email, password, confirmPassword
//     } = userData;
//
//     const signupData = {
//       firstname, email, password, confirmPassword
//     };
//
//     window.fetch('http://localhost:7000/api/v1/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify(signupData),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       credentials: 'include'
//     })
//       .then(res => res.json())
//       .then(res => {
//         if (res.status === 'success') {
//           dispatch(isLoggedInAction({ isLoggedIn: true }));
//           this.setState({ isSuccess: true }, () => {
//             this.updateStateMessages([res.message]);
//             window.location.href = 'https://rmw-react.herokuapp.com';
//           });
//         }
//         this.updateStateMessages([res.message]);
//         return dispatch(isLoadingAction(false));
//       })
//       .catch(error => dispatch(messagesAction([error])));
//   }
//
//   render() {
//     const {
//       firstname, email, password, confirmPassword, isSuccess
//     } = this.state;
//
//     const { isLoading, messages } = this.props;
//
//     return (
//       <div className="banner banner-signup">
//         <div className="tint">
//           <nav className="navigation-bar">
//             <Link to="/" className="navigation-brand">
//               <img src="../../assets/img/logormww.png" alt="Logo" />
//             </Link>
//           </nav>
//           <MessageDiv
//             messages={messages}
//             isSuccess={isSuccess}
//             style={{ opacity: messages.lenth ? '0' : '1' }}
//           />
//           <div className="content-wrapper">
//             <div className="form">
//               <div className="intro">
//                 <h2>Sign Up</h2>
//               </div>
//               <SignupForm
//                 onChange={this.handleChange}
//                 onClick={this.handleSubmit}
//                 firstname={firstname}
//                 email={email}
//                 password={password}
//                 confirmPassword={confirmPassword}
//                 loading={isLoading}
//               />
//               <div className="intro">
//                 <p>
//                   Already a user?
//                   <Link to="/login">Log in</Link>
//                    instead.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// Signup.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   messages: PropTypes.array.isRequired
// };
//
// const mapStateToProps = (state, ownProps) => ({
//   isLoggedIn: state.isLoggedIn,
//   isLoading: state.isLoading,
//   messages: state.messages
// });
//
// export default connect(mapStateToProps)(Signup);
