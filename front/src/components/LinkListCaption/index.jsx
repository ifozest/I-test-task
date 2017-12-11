import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  clearHistory: PropTypes.func.isRequired,
};

/**
 * Captions for Link list
 */
function LinkListCaption({ clearHistory }) {
  return (
    <div className="list-caption">
      <span className="list-caption_title">Previously shortened by you</span>
      <span
        onClick={clearHistory}
        className="list-caption_action"
      >Clear history
      </span>
    </div>
  );
}

LinkListCaption.propTypes = propTypes;

export default LinkListCaption;
