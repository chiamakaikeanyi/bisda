import React from 'react';
import PropTypes from 'prop-types';
import { composeClasses } from '../../utils';
import styles from './input_adornment.module.scss';
import { ReactComponent as ViewIcon } from '../../images/view.svg';
import { ReactComponent as HideIcon } from '../../images/hide.svg';

const InputAdornment = ({ id, label, placeholder, onChange, toggle, onToggle, className }) => (
  <div className={composeClasses(styles.input_wrapper, className)}>
    <label className={styles.visually_hidden} htmlFor={id}>
      {label}
    </label>
    <input
      className={styles.input}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={toggle ? 'text' : 'password'}
    />

    {toggle ? (
      <ViewIcon aria-label="View" className={styles.icon} data-testid="view_icon" onClick={onToggle} />
    ) : (
      <HideIcon aria-label="Hide" className={styles.icon} data-testid="hide_icon" onClick={onToggle} />
    )}
  </div>
);

InputAdornment.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  toggle: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
};

export default InputAdornment;
