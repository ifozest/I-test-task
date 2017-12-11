import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  linkFormValue: PropTypes.string.isRequired,
  disabledForm: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

/**
 * // TODO split on Form, InputText and Button Components
 */
function LinkForm({
  linkFormValue, disabledForm, onChange, submit,
}) {
  const btnClass = disabledForm || !linkFormValue ? 'disabled' : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disabledForm && linkFormValue) {
      submit(linkFormValue);
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <input
          className="form_input"
          autoFocus
          autoComplete="off"
          type="text"
          name="link"
          value={linkFormValue}
          onChange={onChange}
          disabled={disabledForm}
        />
        <button
          className={`form_btn ${btnClass}`}
          type="submit"
        >Shorten this link
        </button>
      </form>
    </div>
  );
}

LinkForm.propTypes = propTypes;

export default LinkForm;
