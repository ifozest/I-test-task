import { LINK_LIST_ADD_RESPONSE } from 'utils/constants';

const newLink = (state = '', action) => {
  switch (action.type) {
    case LINK_LIST_ADD_RESPONSE:
      return action.link.shortcode;
    default:
      return state;
  }
};

export default newLink;
