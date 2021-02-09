import React from 'react';
import Layout from '../Layout';
import styles from './notFound.module.scss';

const NotFound = () => {
  return (
    <Layout>
      <section className={styles.not_found_wrapper}>
        <div>
          <h1>No business listing found</h1>
          <p>Please try another business name </p>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
