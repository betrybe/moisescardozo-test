import PropTypes from 'prop-types';
import React from 'react';

export default function InputField({ placeholder, id, inputStyle,
  name,
  onChange,
  value }) {
  return (
    <input
      placeholder={ placeholder }
      className={ inputStyle }
      name={ name }
      id={ id }
      onChange={ onChange }
      value={ value }
    />
  );
}
InputField.defaultProps = {
  inputStyle: undefined,
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputStyle: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
