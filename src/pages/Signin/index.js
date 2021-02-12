import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import styles from './signin.module.scss';
import InputAdornment from '../../components/InputAdornment';
import { useAuth } from '../../context/auth';

const Signin = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthToken } = useAuth();

  const referer = props.location.state ? props.location.state.referer : '/';

  function handleToggle() {
    setToggle(prevState => !prevState);
  }

  function handleSignIn() {
    if (username === 'admin@email.com' && password === '@Password123') {
      setAuthToken({
        username,
        password
      });
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <DefaultLayout className={styles.signin_wrapper}>
      <h1 className={styles.signin_title}>Sign in to your account</h1>
      <fieldset className={styles.input_wrapper}>
        {isError && <p className={styles.signin_error}>The username or password provided is incorrect</p>}

        <Input
          id="email"
          label="Email Address"
          onChange={e => setUsername(e.target.value)}
          placeholder="Email Address"
          type="email"
        />

        <InputAdornment
          id="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          onToggle={handleToggle}
          placeholder="Password"
          toggle={toggle}
        />
      </fieldset>
      <Button className={styles.button} label="Sign In" onClick={handleSignIn} />
    </DefaultLayout>
  );
};

export default Signin;
