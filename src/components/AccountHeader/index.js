import React from 'react';
import { Text, Image, withExperienceEditorChromes } from '@sitecore-jss/sitecore-jss-react';

import styles from './accountHeader.module.scss';

const AccountHeader = (props) => {
  return (
    <header className={styles.accountHeader}>
      <Image media={props.fields.logo} height="28" width="143" />
      <a href={'/styleguide'}>
        <Image media={props.fields.backArrowIcon} />
        <span className={styles.fullLinkText}>Back to Previous Page</span>
        <span className={styles.mobileLinkText}>Back</span>
      </a>
    </header>
  );
};

export default AccountHeader;
