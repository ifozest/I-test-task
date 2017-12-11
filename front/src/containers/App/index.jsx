import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestLinks } from 'actions/linkList';
import AppComponent from 'components/App';

const propTypes = {
  fetchLinks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  notification: PropTypes.string,
};

/**
 * Entry point of application
 * At start fetches all Links
 */
class App extends React.Component {
  componentWillMount() {
    this.props.fetchLinks();
  }

  render() {
    return (
      <AppComponent
        loading={this.props.loading}
        notification={this.props.notification}
      />
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = ({ loading, notification }) => ({
  loading,
  notification,
});

const mapDispatchToProps = dispatch => ({
  fetchLinks: () => {
    dispatch(requestLinks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
