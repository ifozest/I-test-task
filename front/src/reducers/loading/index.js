import {
  LINK_LIST_FETCH_REQUEST,
  LINK_LIST_ADD_REQUEST,
  LINK_LIST_ADD_RESPONSE,
  LINK_LIST_FETCH_RESPONSE,
} from 'utils/constants';

/**
 * Loading flag, used for Loader Component
 * Set to true for Ajax calls
 * @param {boolean} [state = true] - true by default
 * @param action
 * @return {boolean}
 */
const loading = (state = true, action) => {
  switch (action.type) {
    case LINK_LIST_FETCH_REQUEST:
    case LINK_LIST_ADD_REQUEST:
      return true;
    case LINK_LIST_ADD_RESPONSE:
    case LINK_LIST_FETCH_RESPONSE:
      return false;
    default:
      return state;
  }
};

export default loading;
