import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import styles from './default_layout.module.scss';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.layout_wrapper} data-testid="default_layout">
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
