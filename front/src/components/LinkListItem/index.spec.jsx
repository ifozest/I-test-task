import React from 'react';
import { shallow } from 'enzyme';

import { SERVER } from 'utils/constants';

import LinkListItem from './';

describe('#components/LinkListItem', () => {
  it('should render without crashing', () => {
    const item = {
      shortcode: 'shortcode',
      url: 'url',
      redirectCount: 0,
      startDate: 'startDate',
    };
    const wrapper = shallow((
      <LinkListItem
        link={item}
        onCopy={() => {
        }}
      />
    ));

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.link_title_shortcode').find('span').first().text()).toEqual(SERVER + item.shortcode);
  });
});

