import React from 'react';
import PropTypes from 'prop-types';

function Input({
  onChange, value, placeholder, type, className,

}) {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,

};

export default Input;
