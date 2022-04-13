import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FooterNavigationColumn = (props) => (
  <div>
    <p>FooterNavigationColumn Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default FooterNavigationColumn;
