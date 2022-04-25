import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import styles from './login.module.scss';

const Login = (props) => (
  <div>
    <p className={styles.testThis}>Login Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Login;
