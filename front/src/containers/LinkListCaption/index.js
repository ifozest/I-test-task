import { connect } from 'react-redux';

import LinkListCaption from 'components/LinkListCaption';
import { clearHistory } from 'actions/linkList';

const mapDispatchToProps = dispatch => ({
  clearHistory: () => {
    dispatch(clearHistory());
  },
});

export default connect(null, mapDispatchToProps)(LinkListCaption);
