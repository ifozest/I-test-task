import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Rating from 'components/Rating/index';

import { SERVER } from 'utils/constants';

const propTypes = {
  link: PropTypes.shape({
    shortcode: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    redirectCount: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
  }).isRequired,
  onCopy: PropTypes.func.isRequired,
};


const scale = [{
  id: 0,
  color: 'red',
  title: 'red',
},{
  id: 1,
  color: 'blue',
  title: 'blue',
},{
  id: 2,
  color: 'green',
  title: 'green',
},{
  id: 3,
  color: 'white',
  title: 'white',
},{
  id: 4,
  color: 'black',
  title: 'black',
},];

const onSelect = (value) => {
  console.log(value);
};

/**
 * Dispay one Link object
 * @param {Object} link - link to display
 * @param {function} onCopy - action to call after copy link to Clipboard
 */
function LinkListItem({ link, newLink, onCopy }) {
  const url = SERVER + link.shortcode;
  const cssStyles = link.shortcode === newLink ? 'link-new' : '';

  return (
    <li className={`link ${cssStyles}`}>
      <div className="link_title">
        <CopyToClipboard
          text={url}
          onCopy={onCopy}
        >
          <div className="link_title_shortcode">
            <span>{url}</span>
            <span className="link_title_shortcode_tip">Click to copy this link</span>
          </div>
        </CopyToClipboard>
        <div className="link_title_url">{link.url}</div>
      </div>
      <div className="link_count">{link.redirectCount}</div>
      <div className="link_date"><Moment fromNow>{link.startDate}</Moment></div>


      <div>
        <Rating
          scale={scale}
          onSelect={onSelect}
        />
      </div>

    </li>
  );
}

LinkListItem.propTypes = propTypes;

export default LinkListItem;
