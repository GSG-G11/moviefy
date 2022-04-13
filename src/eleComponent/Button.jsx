import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleFunc, title, className }) {
  return (
    <button className={className} type="submit" onClick={handleFunc}>{title}</button>
  );
}
Button.propTypes = {
  handleFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
