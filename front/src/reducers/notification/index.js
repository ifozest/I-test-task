import { NOTIFICATION_SHOW, NOTIFICATION_HIDE } from 'utils/constants';

const notification = (state = '', action) => {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return action.notification;
    case NOTIFICATION_HIDE:
      return '';
    default:
      return state;
  }
};

export default notification;
