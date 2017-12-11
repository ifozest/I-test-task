import { NOTIFICATION_HIDE, NOTIFICATION_SHOW } from 'utils/constants';

export const notificationShow = notification => ({
  type: NOTIFICATION_SHOW,
  notification,
});

export const notificationHide = () => ({
  type: NOTIFICATION_HIDE,
});

/**
 * // TODO
 */
export const showNotification = message => (dispatch) => {
  dispatch(notificationShow(message));
  setTimeout(() => {
    dispatch(notificationHide());
  }, 5000);
};
