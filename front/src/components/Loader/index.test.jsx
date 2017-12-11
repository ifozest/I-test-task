import React from 'react';
import { shallow } from 'enzyme';

import Loader from './';

describe('#components/Loader', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toHaveLength(1);
  });
});
