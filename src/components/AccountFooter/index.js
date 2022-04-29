import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import styles from './accountFooter.module.scss';

const LINKS = [
  'Contact Us',
  'Sales Directory',
  'Terms of Use',
  'Terms & Conditions of Sale',
  'Privacy Policy',
];

const AccountFooter = (props) => (
  <div className={styles.accountFooter}>
    <div className={styles.linksContainer}>
      {LINKS.map((link, index) => (
        <a key={index}>{link}</a>
      ))}
    </div>
    <div className={styles.copyrightContainer}>
      <div>&copy; 2022 Legrand AV Inc.</div>
      <span>&nbsp;|&nbsp;</span>
      <div>Do Not Sell My Personal Information</div>
    </div>
  </div>
);

export default AccountFooter;
