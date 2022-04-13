import React from 'react';
import PropTypes from 'prop-types';

function Image({ className = '', alt, src }) {
  return (
    <img className={className} src={src} alt={alt} />
  );
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Image;
