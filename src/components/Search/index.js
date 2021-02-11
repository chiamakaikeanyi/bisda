import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.module.scss';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as CancelIcon } from '../../images/cancel.svg';
import { composeClasses } from '../../utils';

const Search = ({ placeholder, onChange, onClear, searchTerm, className }) => (
  <div className={composeClasses(styles.search_wrapper, className)}>
    <input className={styles.search} onChange={onChange} placeholder={placeholder} type="search" value={searchTerm} />

    {searchTerm ? (
      <CancelIcon aria-label="Close" className={styles.icon} data-testid="cancel_icon" onClick={onClear} />
    ) : (
      <SearchIcon aria-label="Search" className={styles.icon} data-testid="search_icon" />
    )}
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  searchTerm: PropTypes.string,
  className: PropTypes.string
};

export default Search;
