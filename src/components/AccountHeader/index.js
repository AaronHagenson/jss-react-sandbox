import React from 'react';
import { Text, Image, withExperienceEditorChromes } from '@sitecore-jss/sitecore-jss-react';

import styles from './accountHeader.module.scss';

const AccountHeader = (props) => {
  return (
    <div className={styles.accountHeader}>
      <Image media={props.fields.logo} height="28" width="143" />
      <a href={'/styleguide'}>
        <svg width="8" height="18" viewBox="0 0 8 18" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect width="6" height="18"></rect>
            <path
              d="M5.58985872,9.01230046 L0.304851926,3.71930992 C0.0452879141,3.4682359 -0.0588106568,3.09643314 0.0325665821,2.74680434 C0.123943821,2.39717553 0.396576443,2.12413106 0.745677883,2.03261578 C1.09477932,1.9411005 1.46602127,2.04535633 1.71671658,2.30531245 L7.7076557,8.30530173 C8.0974481,8.69580088 8.0974481,9.32880005 7.7076557,9.7192992 L1.71671658,15.7192885 C1.32493024,16.09826 0.702166238,16.0928402 0.317014955,15.7071071 C-0.0681363291,15.321374 -0.0735479799,14.6976692 0.304851926,14.305291 L5.58985872,9.01230046 Z"
              fill="#1b2d3a"
              transform="matrix(-1 0 0 1 8 0)"
            ></path>
          </g>
        </svg>
        <span className={styles.fullLinkText}>Back to Previous Page</span>
        <span className={styles.mobileLinkText}>Back</span>
      </a>
    </div>
  );
};

export default AccountHeader;
