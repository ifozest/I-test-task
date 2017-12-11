import { CLIPBOARD_COPY } from 'utils/constants';
import { showNotification } from 'actions/notification';

export const clipboardCopy = value => ({
  type: CLIPBOARD_COPY,
  value,
});

export const copyToClipboard = value => (dispatch) => {
  dispatch(clipboardCopy(value));
  const message = `${value} was copied to your clipboard!`;
  dispatch(showNotification(message));
};
