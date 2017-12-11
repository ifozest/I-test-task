import React from 'react';
import PropTypes from 'prop-types';

import LinkListItem from 'containers/Link';

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    shortcode: PropTypes.string.isRequired,
  })).isRequired,
  newLink: PropTypes.string.isRequired,
};

/**
 * Display list of Links
 * @param {Object[]} links - Links to display
 */
function LinkListData({ links, newLink }) {
  return (
    <ul className="list">
      {links.map((link) => {
        let linkObj = link;
        if (link.shortcode === newLink) {
          linkObj = Object.assign({}, link, {
            isNew: true,
          });
        }
        return (
          <LinkListItem
            key={linkObj.shortcode}
            link={linkObj}
          />
        );
      })}
    </ul>
  );
}

LinkListData.propTypes = propTypes;

export default LinkListData;
