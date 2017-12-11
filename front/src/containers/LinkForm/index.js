import { connect } from 'react-redux';

import LinkForm from 'components/LinkForm';
import { setLinkFormValue, handleSubmit } from 'actions/linkForm';

const mapStateToProps = (state) => {
  const { linkFormValue, disabledForm } = state;

  return {
    linkFormValue,
    disabledForm,
  };
};

const mapDispatchToProps = dispatch => ({
  /**
   * Get value from input text field
   * And dispatch action to set input form value
   * @param {Event} e - DOM Event object
   */
  onChange: (e) => {
    const { value } = e.target;
    dispatch(setLinkFormValue(value));
  },
  submit: (url) => {
    dispatch(handleSubmit(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkForm);
