import React from 'react';
import PropTypes from 'prop-types';

import LinkListCaption from 'containers/LinkListCaption';
import LinkListHeadings from 'components/LinkListHeadings';
import LinkListData from 'components/LinkListData';
import LinkListEmptyData from 'components/LinkListEmptyData';

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

/**
 * Display list of Links
 * If there are no Links - show message
 * @param links
 */
function LinkList({ links }) {
  let data;

  if (links.length > 0) {
    data = (
      <LinkListData
        links={links}
      />
    );
  } else {
    data = (<LinkListEmptyData />);
  }

  return (
    <div className="link-list">
      <LinkListCaption />
      <LinkListHeadings />
      {data}
    </div>
  );
}

LinkList.propTypes = propTypes;

export default LinkList;
