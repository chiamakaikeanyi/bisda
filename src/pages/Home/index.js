import React from 'react';
import DefaultLayout from '../DefaultLayout';
import { ReactComponent as BusinessDeal } from '../../images/business_deal.svg';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <DefaultLayout>
      <section className={styles.home_wrapper}>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <p className={styles.info_explore}>Explore</p>
            <h1 className={styles.info_heading}>A global listing of business directory </h1>
            <h2 className={styles.info_description}>Give your business a face-lift, get listed</h2>
            <Link to="/listings" className={styles.cta}>
              View listings
            </Link>
          </div>
        </div>
        <BusinessDeal className={styles.business_image} height="500px" />
      </section>
    </DefaultLayout>
  );
};

export default Home;
