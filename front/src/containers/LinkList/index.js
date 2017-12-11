import { connect } from 'react-redux';

import LinkList from 'components/LinkList';

const mapStateToProps = ({ links }) => ({
  links,
});

export default connect(mapStateToProps)(LinkList);
