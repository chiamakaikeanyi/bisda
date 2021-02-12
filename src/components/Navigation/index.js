import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';
import Button from '../Button';
import { useAuth } from '../../context/auth';

const Navigation = ({ navigationMenu, activeClassName }) => {
  const { setAuthToken } = useAuth();

  const currentToken = localStorage.getItem('token') !== null && JSON.parse(localStorage.getItem('token'));

  const filteredNav = currentToken ? navigationMenu.filter(item => item.label !== 'Sign In') : navigationMenu;

  function signOut() {
    setAuthToken(null);
  }

  return (
    <nav>
      <ul className={styles.nav_wrapper}>
        {filteredNav &&
          filteredNav.map(menu => (
            <li className={styles.nav_item} key={menu.id}>
              <NavLink activeClassName={activeClassName} to={menu.url}>
                {menu.label}
              </NavLink>
            </li>
          ))}

        {currentToken && (
          <>
            <li className={styles.nav_item}>
              <NavLink activeClassName={activeClassName} to="/admin">
                Admin
              </NavLink>
            </li>
            <Button className={styles.sign_out} label="Sign Out" onClick={signOut} />
          </>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  activeClassName: PropTypes.string,
  navigationMenu: PropTypes.array.isRequired
};

export default Navigation;
