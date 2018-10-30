import React from 'react';
import PropTypes from 'prop-types';

const MessageDiv = (props) => {
  const { message: { messages, isSuccess } } = props;

  return (
    <div id="message">
      {messages.map((message, i) => (
        <p
          className="error-message"
          style={{ backgroundColor: isSuccess ? 'rgb(80,220,80)' : 'rgb(220,80,80)' }}
          key={i}>
          {message}
        </p>
      ))}
    </div>
  );
};

MessageDiv.propTypes = {
  message: PropTypes.shape.isRequired
};

export default MessageDiv;
