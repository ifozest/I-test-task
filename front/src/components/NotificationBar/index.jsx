import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  message: PropTypes.string,
  cssClass: PropTypes.string,
};
const defaultProps = {
  message: '',
  cssClass: '',
};

function NotificationBar({ message, cssClass }) {
  return (
    <div className={`notification ${cssClass}`}>
      {message}
    </div>
  );
}

NotificationBar.defaultProps = defaultProps;
NotificationBar.propTypes = propTypes;

export default NotificationBar;
