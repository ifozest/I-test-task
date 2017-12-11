import React from 'react';
import PropTypes from 'prop-types';

import LinkListItem from 'containers/Link';

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    shortcode: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * Display list of Links
 * @param {Object[]} links - Links to display
 */
function LinkListData({ links }) {
  return (
    <ul className="list">
      {links.map(link => (
        <LinkListItem
          key={link.shortcode}
          link={link}
        />
      ))}
    </ul>
  );
}

LinkListData.propTypes = propTypes;

export default LinkListData;
