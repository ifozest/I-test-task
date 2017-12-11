import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  LINK_LIST_ADD_REQUEST,
  LINK_LIST_ADD_RESPONSE,
  LINK_LIST_FETCH_REQUEST,
  LINK_LIST_FETCH_RESPONSE,
  LINK_LIST_CLEAR,
} from 'utils/constants';

import { fetchLinks, createShortenLink, clear } from 'services/linkStorage';

import {
  fetchRequest,
  addResponse,
  addRequest,
  createLink,
  clearHistory,
  requestLinks,
  linkListClear,
  fetchResponse,
} from './';

jest.mock('services/linkStorage', () => ({
  fetchLinks: jest.fn(),
  createShortenLink: jest.fn(),
  clear: jest.fn(),
}));

fetchLinks.mockImplementation(() => []);
createShortenLink.mockImplementation(url => Promise.resolve({
  url,
}));
clear.mockImplementation(() => undefined);


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#actions/linkList', () => {
  const initialState = {};
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('#fetchRequest', () => {
    it('should dispatch action', () => {
      store.dispatch(fetchRequest());

      const actions = store.getActions();
      const expectedPayload = { type: LINK_LIST_FETCH_REQUEST };
      expect(actions).toEqual([expectedPayload]);
    });
  });

  describe('#fetchResponse', () => {
    it('should dispatch action', () => {
      store.dispatch(fetchResponse());

      const actions = store.getActions();
      const expectedPayload = { type: LINK_LIST_FETCH_RESPONSE };
      expect(actions).toEqual([expectedPayload]);
    });
  });

  describe('#addRequest', () => {
    it('should dispatch action', () => {
      store.dispatch(addRequest());

      const actions = store.getActions();
      const expectedPayload = { type: LINK_LIST_ADD_REQUEST };
      expect(actions).toEqual([expectedPayload]);
    });
  });

  describe('#addResponse', () => {
    it('should dispatch action', () => {
      store.dispatch(addResponse());

      const actions = store.getActions();
      const expectedPayload = { type: LINK_LIST_ADD_RESPONSE };
      expect(actions).toEqual([expectedPayload]);
    });
  });

  describe('#linkListClear', () => {
    it('should dispatch action', () => {
      store.dispatch(linkListClear());

      const actions = store.getActions();
      const expectedPayload = { type: LINK_LIST_CLEAR };
      expect(actions).toEqual([expectedPayload]);
    });
  });

  describe('#requestLinks', () => {
    it('should dispatch action', () => {
      store.dispatch(requestLinks());
      const actions = store.getActions();
      const expectedPayload = [
        { type: LINK_LIST_FETCH_REQUEST },
        { links: [], type: LINK_LIST_FETCH_RESPONSE },
      ];
      expect(actions).toEqual(expectedPayload);
    });
  });

  describe('#createLink', () => {
    it('should dispatch action', () => {
      const url = 'testurl';
      store.dispatch(createLink(url)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: LINK_LIST_ADD_REQUEST, url });
        expect(actions[1]).toEqual({ type: LINK_LIST_ADD_RESPONSE, link: { url } });
      });
    });
  });

  describe('#clearHistory', () => {
    it('should dispatch action', () => {
      store.dispatch(clearHistory());
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: LINK_LIST_CLEAR });
    });
  });
});
