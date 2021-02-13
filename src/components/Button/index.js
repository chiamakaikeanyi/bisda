import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, onClick, icon }) => (
  <button className={className} onClick={onClick} type="button">
    {label ? label : icon}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node
};

export default Button;
