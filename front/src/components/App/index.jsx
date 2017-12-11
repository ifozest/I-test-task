import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import NotificationBar from 'components/NotificationBar';
import LinkForm from 'containers/LinkForm/index';
import LinkList from 'containers/LinkList';

import Loader from 'components/Loader';

const propTypes = {
  loading: PropTypes.bool.isRequired,
};

function App({ loading, notification }) {
  let loader;
  let notificationStyleClass = '';
  if (loading) {
    loader = (<Loader />);
  }

  if (notification) {
    notificationStyleClass = 'yellow';
  }

  return (
    <div className="container">
      {loader}
      <Header />
      <LinkForm />
      <NotificationBar
        message={notification}
        cssClass={notificationStyleClass}
      />
      <LinkList />
    </div>
  );
}

App.propTypes = propTypes;

export default App;
