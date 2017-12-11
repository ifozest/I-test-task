import { LINK_FORM_SET_VALUE } from 'utils/constants';

/**
 * Form input value
 * @param {string} [state = ''] - empty string by default
 * @param action
 * @return {string}
 */
const linkFormValue = (state = '', action) => {
  switch (action.type) {
    case LINK_FORM_SET_VALUE:
      return action.url;
    default:
      return state;
  }
};

export default linkFormValue;
