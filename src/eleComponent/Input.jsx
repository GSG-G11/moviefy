import React from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, value, placeholder }) {
  return (
    <input type="text" onChange={onChange} value={value} placeholder={placeholder} />
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
