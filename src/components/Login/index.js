import React, { useState } from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

import styles from './login.module.scss';

const Login = (props) => {
  const [shouldShowErrorMsg, setShouldShowErrorMsg] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setShouldShowErrorMsg(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (shouldShowErrorMsg) {
      setShouldShowErrorMsg(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (shouldShowErrorMsg) {
      setShouldShowErrorMsg(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Text field={props.fields.heading} tag={'h2'} />
      <form onSubmit={handleSubmit}>
        <label>
          <div>Email</div>
          <input type={'text'} value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <div>
            Password{' '}
            <span>
              <Link field={props.fields.forgotPasswordLink} />
            </span>
          </div>{' '}
          <input type={'password'} value={password} onChange={handlePasswordChange} />
        </label>
        {shouldShowErrorMsg && (
          <div className={styles.errorMessage}>Your username and/or password is incorrect</div>
        )}
        <input type={'submit'} value={'SIGN IN'} disabled={!(email.length && password.length)} />
      </form>
      <hr />
      <div className={styles.createAccountSection}>
        <Text field={props.fields.subTextHeading} tag={'h3'} />
        <Text field={props.fields.subText} tag={'p'} />
        <Link field={props.fields.createAccountLink} />
      </div>
    </div>
  );
};

export default Login;
