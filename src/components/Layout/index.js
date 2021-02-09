import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.layout_wrapper} data-testid="layout">
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
