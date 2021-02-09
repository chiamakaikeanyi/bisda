import React from 'react';
import DefaultLayout from '../DefaultLayout';
import styles from './notFound.module.scss';
import Button from '../../components/Button';

const NotFound = () => {
  return (
    <DefaultLayout>
      <section className={styles.not_found_wrapper}>
        <h1>Page not found</h1>
        <p>Please check the route or</p>
        <Button label="Go Home" />
      </section>
    </DefaultLayout>
  );
};

export default NotFound;
