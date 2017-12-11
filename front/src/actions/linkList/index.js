import {
  LINK_LIST_ADD_REQUEST,
  LINK_LIST_ADD_RESPONSE,
  LINK_LIST_FETCH_REQUEST,
  LINK_LIST_FETCH_RESPONSE,
  LINK_LIST_CLEAR,
} from 'utils/constants';
import { fetchLinks, createShortenLink, clear } from 'services/linkStorage';

/**
 * Request for fetch all links
 */
export const fetchRequest = () => ({
  type: LINK_LIST_FETCH_REQUEST,
});

/**
 * Response with links
 * @param {Object[]} links - array of links or empty array
 */
export const fetchResponse = links => ({
  type: LINK_LIST_FETCH_RESPONSE,
  links,
});

/**
 * Request to process new url
 * @param {string} url - url to process
 */
export const addRequest = url => ({
  type: LINK_LIST_ADD_REQUEST,
  url,
});

/**
 * Response with new created link
 * @param {Object} link - new created link
 */
export const addResponse = link => ({
  type: LINK_LIST_ADD_RESPONSE,
  link,
});

/**
 * Remove all links
 */
export const linkListClear = () => ({
  type: LINK_LIST_CLEAR,
});

/**
 * Dispatch chain of actions to fetch all links
 */
export const requestLinks = () => (dispatch) => {
  dispatch(fetchRequest());
  const links = fetchLinks();
  dispatch(fetchResponse(links));
};

/**
 * Dispatch chain of actions to create new link from url
 * // TODO error handling
 * @param {string} url - url to process
 */
export const createLink = url => (dispatch) => {
  dispatch(addRequest(url));

  return createShortenLink(url).then((link) => {
    dispatch(addResponse(link));
    dispatch(requestLinks());
  }).catch(console.error);
};

/**
 * Dispatch chain of actions to remove links
 */
export const clearHistory = () => (dispatch) => {
  dispatch(linkListClear());
  clear();
  dispatch(requestLinks());
};
