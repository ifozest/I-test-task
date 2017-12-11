import { connect } from 'react-redux';

import LinkListItem from 'components/LinkListItem';
import { copyToClipboard } from 'actions/clipBoard';


const mapStateToProps = ({ newLink}) => ({
  newLink,
});

const mapDispatchToProps = dispatch => ({
  onCopy: (value) => {
    dispatch(copyToClipboard(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListItem);
