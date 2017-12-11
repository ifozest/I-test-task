import {
  LINK_FORM_SUBMIT_START,
  LINK_FORM_SUBMIT_END,
} from 'utils/constants';

/**
 * Flag to disable form for submit
 * During the submit form process set to true
 * @param {boolean} [state=false] - false by default
 * @param {Object} action
 * @return {boolean}
 */
const disabledForm = (state = false, action) => {
  switch (action.type) {
    case LINK_FORM_SUBMIT_START:
      return true;
    case LINK_FORM_SUBMIT_END:
      return false;
    default:
      return state;
  }
};

export default disabledForm;
