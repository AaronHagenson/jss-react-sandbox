import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

import styles from './login.module.scss';

const Login = (props) => (
  <div className={styles.loginContainer}>
    <Text field={props.fields.heading} tag={'h2'} />
    <form>
      <label>
        <div>Email</div>
        <input type={'text'} />
      </label>
      <label>
        <div>
          Password{' '}
          <span>
            <Link field={props.fields.forgotPasswordLink} />
          </span>
        </div>{' '}
        <input type={'text'} />
      </label>
    </form>
  </div>
);

export default Login;
