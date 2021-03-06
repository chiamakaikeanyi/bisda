import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import styles from './default_layout.module.scss';
import { composeClasses } from '../../utils';

const DefaultLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={composeClasses(styles.layout_wrapper, className)} data-testid="default_layout">
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
