import { connect } from 'react-redux';

import LinkList from 'components/LinkList';

const mapStateToProps = ({ links, newLink }) => ({
  links,
  newLink,
});

export default connect(mapStateToProps)(LinkList);
