import React from 'react';
import PropTypes from 'prop-types';
import { composeClasses } from '../../utils';
import styles from './button.module.scss';

const Button = ({ className, label, onClick }) => (
  <button className={composeClasses(styles.button, className)} onClick={onClick} type="button">
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
