import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import styles from './notFound.module.scss';
import emptyIcon from '../../images/empty.png';

const NotFound = () => {
  return (
    <DefaultLayout>
      <section className={styles.not_found_wrapper}>
        <div className={styles.not_found}>
          <img alt="Empty state" src={emptyIcon} width="200px" />
          <h1>Page not found</h1>
          <p>Please check the route or visit any link above</p>
          <Link className={styles.cta} to="/">
            Go Home
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default NotFound;
