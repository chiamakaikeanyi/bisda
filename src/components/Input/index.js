import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import { composeClasses } from '../../utils';

const Input = ({ id, label, placeholder, onChange, type, className }) => (
  <div className={composeClasses(styles.input_wrapper, className)}>
    <label className={styles.visually_hidden} htmlFor={id}>
      {label}
    </label>
    <input className={styles.input} id={id} onChange={onChange} placeholder={placeholder} type={type} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
