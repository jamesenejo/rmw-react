import React from 'react';
import PropTypes from 'prop-types';

const stylePercentageBar = (percentage) => {
  const style = { width: percentage };
  if (percentage === '33%') {
    style.backgroundColor = 'rgb(180,20,0)';
  }
  if (percentage === '88%') {
    style.backgroundColor = 'rgb(120,170,0)';
  }
  if (percentage === '100%') {
    style.backgroundColor = 'rgb(10,120,0)';
  }
  return style;
};

const CompletenessBar = (props) => {
  const { completeness } = props;
  return (
    <div className="profile-completeness-profile">
      <h4>Profile completeness</h4>
      <div className="profile-percentage">
        <div id="percentageBar" style={stylePercentageBar(completeness)}>
          <div id="percentage">{completeness}</div>
        </div>
      </div>
    </div>
  );
};

CompletenessBar.propTypes = {
  completeness: PropTypes.string.isRequired
};

export default CompletenessBar;
