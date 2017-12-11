import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { LINK_FORM_SET_VALUE, LINK_FORM_SUBMIT_START } from 'utils/constants';
import LinkFormComponent from 'components/LinkForm';


import { createShortenLink } from 'services/linkStorage';

import LinkForm from './';

jest.mock('services/linkStorage', () => ({
  fetchLinks: jest.fn(),
  createShortenLink: jest.fn(),
  clear: jest.fn(),
}));

createShortenLink.mockImplementation(url => Promise.resolve({
  url,
}));

describe('#containers/LinkForm', () => {
  const initialState = {
    linkFormValue: '',
    disabledForm: false,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><LinkForm /></Provider>);
  });

  it('should render component without errors', () => {
    expect(wrapper.find(LinkFormComponent).length).toEqual(1);
  });

  it('should render component with props matches with initialState', () => {
    expect(wrapper.find(LinkFormComponent).prop('linkFormValue')).toEqual('');
    expect(wrapper.find(LinkFormComponent).prop('disabledForm')).toEqual(false);
  });

  it('should dispatch action when onChange prop is triggered ', () => {
    const onChange = wrapper.find(LinkFormComponent).prop('onChange');
    const e = {
      target: {
        value: 'test',
      },
    };
    onChange(e);
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: LINK_FORM_SET_VALUE,
      url: 'test',
    });
  });

  it('should dispatch action when submit prop is triggered ', () => {
    const submit = wrapper.find(LinkFormComponent).prop('submit');
    submit('test');
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LINK_FORM_SUBMIT_START, url: 'test' });
  });
});
