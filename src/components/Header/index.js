import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../../constants';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation';
import styles from './header.module.scss';

const Header = () => (
  <section className={styles.header_wrapper}>
    <header>
      <Link className={styles.header} to="/">
        <img alt="logo" className={styles.logo} src={logo} width="50px" />
        <p className={styles.app_name}>{constants.appName}</p>
      </Link>
    </header>
    <Navigation activeClassName={styles.active} navigationMenu={constants.navigationMenu} />
  </section>
);

export default Header;
