import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import { composeClasses } from '../../utils';

const Input = ({
  id,
  label,
  placeholder,
  onChange,
  type,
  className,
  inputClassName,
  visuallyHidden,
  pattern,
  maxLength,
  minLength,
  name,
  ...rest
}) => (
  <div className={composeClasses(styles.input_wrapper, className)}>
    <label className={visuallyHidden ? styles.visually_hidden : styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      className={composeClasses(styles.input, inputClassName)}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      onChange={onChange}
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  visuallyHidden: PropTypes.bool,
  pattern: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string,
  inputClassName: PropTypes.string
};

export default Input;
