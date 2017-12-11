import { LINK_LIST_FETCH_RESPONSE } from 'utils/constants';

/**
 * Array of links
 * Contains all Links after fetch
 * @param {Object[]} state - by default empty array
 * @param action
 * @return {Object[]}
 */
const links = (state = [], action) => {
  switch (action.type) {
    case LINK_LIST_FETCH_RESPONSE:
      return action.links;
    default:
      return state;
  }
};

export default links;
