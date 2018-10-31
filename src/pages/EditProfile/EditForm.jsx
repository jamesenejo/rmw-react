import React from 'react';
import PropTypes from 'prop-types';

const EditForm = (props) => {
  const {
    firstnameRef,
    lastnameRef,
    emailRef,
    genderRef,
    phoneRef,
    cityRef,
    stateRef,
    user,
    loading,
    handleSubmit
  } = props;
  const {
    firstname, lastname, email, gender, phone, city, state
  } = user;

  return (
    <div className="form-body" id="formBody">
      <form method="PUT">
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" ref={firstnameRef} value={firstname} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" ref={lastnameRef} value={lastname} required />
          </div>
        </div>
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="gender">Gender</label>
            <select ref={genderRef} name="gender" required disabled={gender} value={gender}>
              <option value="" hidden>--Select--</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" ref={emailRef} value={email} readOnly />
          </div>
        </div>
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="phone">Mobile Number</label>
            <input type="tel" name="phone" ref={phoneRef} value={phone} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input type="text" name="city" ref={cityRef} value={city} required />
          </div>
        </div>
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="state">State</label>
            <input type="text" name="state" ref={stateRef} value={state} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" value="Nigeria" />
          </div>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="form-btn" id="submit" onClick={handleSubmit}>
            Save
            <i className="fa fa-spinner fa-spin" id="spinner" style={{ opacity: loading ? '1' : '0' }} />
          </button>
        </div>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  firstnameRef: PropTypes.func.isRequired,
  lastnameRef: PropTypes.func.isRequired,
  emailRef: PropTypes.func.isRequired,
  genderRef: PropTypes.func.isRequired,
  phoneRef: PropTypes.func.isRequired,
  cityRef: PropTypes.func.isRequired,
  stateRef: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default EditForm;
