import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, onClick }) => (
  <button className={className} onClick={onClick} type="button">
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
