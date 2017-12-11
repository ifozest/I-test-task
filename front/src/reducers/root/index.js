import { combineReducers } from 'redux';

import linkFormValue from 'reducers/linkFormValue';
import links from 'reducers/links';
import loading from 'reducers/loading';
import disabledForm from 'reducers/disabledForm';
import notification from 'reducers/notification';
import newLink from 'reducers/newLink';

const rootReducer = combineReducers({
  linkFormValue,
  links,
  loading,
  disabledForm,
  notification,
  newLink,
});

export default rootReducer;
