import React from 'react';
import PropTypes from 'prop-types';

const CreateForm = (props) => {
  const { loading, handleChange, handleSubmit } = props;

  return (
    <form method="POST">
      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="fromState">State</label>
          <input type="text" name="fromState" required onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="fromCity">City</label>
          <input type="text" name="fromCity" required onChange={handleChange} />
        </div>
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="toState">State</label>
          <input type="text" name="toState" placeholder="Destination State" required onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="toCity">City</label>
          <input type="text" name="toCity" placeholder="Destination City" required onChange={handleChange} />
        </div>
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="departure">Departure Date</label>
          <input type="date" name="departureDate" required onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="departure">Departure Time</label>
          <input type="time" name="departureTime" required onChange={handleChange} />
        </div>
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="price">Price (₦)</label>
          <input type="number" name="price" placeholder="eg 2500" min="0" required onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="seats">Seats</label>
          <input type="number" name="seats" placeholder="eg 4" min="1" required onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="pickupLocation">Pick up location</label>
          <input type="text" name="pickupLocation" required onChange={handleChange} />
        </div>
      </div>
      <div className="payment-information">
        <p>Please note that RideMyWay does not handle payments for rides.</p>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="form-btn" id="submit" onClick={handleSubmit}>
          Create ride offer
          <i className="fa fa-spinner fa-spin" id="spinner" style={{ opacity: loading ? '1' : '0' }} />
        </button>
      </div>
    </form>
  );
};

CreateForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default CreateForm;
