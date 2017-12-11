import { LINK_FORM_SET_VALUE, LINK_FORM_SUBMIT_START, LINK_FORM_SUBMIT_END } from 'utils/constants';
import { createLink } from 'actions/linkList';

/**
 * Submit form start
 */
export const submitLinkStart = url => ({
  type: LINK_FORM_SUBMIT_START,
  url,
});

/**
 * Submit form end
 */
export const submitLinkEnd = () => ({
  type: LINK_FORM_SUBMIT_END,
});

/**
 * Set input value in form
 * @param {string} [url = ''] - input url, by default is empty string
 */
export const setLinkFormValue = (url = '') => ({
  type: LINK_FORM_SET_VALUE,
  url,
});

/**
 * Dispatch chain of actions for form submit
 * @param {string} url - url to process
 */
export const handleSubmit = url => (dispatch) => {
  dispatch(submitLinkStart(url));
  dispatch(createLink(url));
  dispatch(setLinkFormValue());
  dispatch(submitLinkEnd());
};
