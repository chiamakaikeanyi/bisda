import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';

const Navigation = ({ navigationMenu, activeClassName }) => {
  return (
    <nav>
      <ul className={styles.nav_wrapper}>
        {navigationMenu.map(menu => (
          <li className={styles.nav_item} key={menu.id}>
            <NavLink activeClassName={activeClassName} to={menu.url}>
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  activeClassName: PropTypes.string,
  navigationMenu: PropTypes.array.isRequired
};

export default Navigation;
