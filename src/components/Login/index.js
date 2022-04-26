import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import styles from './login.module.scss';

const Login = (props) => (
  // <div className={styles.contentWrapper}>
  <div className={styles.loginContainer}>
    <Text field={props.fields.heading} />
  </div>
  // </div>
);

export default Login;
