import React from 'react';
import { shallow } from 'enzyme';

import LinkListItem from 'containers/Link';
import LinkListData from './';

describe('#components/LinkListData', () => {
  it('should render 1 Link without crashing', () => {
    const items = [{
      shortcode: 'shortcode',
      url: 'url',
      redirectCount: 0,
      startDate: 'startDate',
    }];
    const wrapper = shallow(<LinkListData links={items} newLink="" />);
    expect(wrapper.find(LinkListItem)).toHaveLength(1);
  });
});
