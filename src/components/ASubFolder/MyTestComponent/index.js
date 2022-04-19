import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyTestComponent = (props) => (
  <div>
    <p>MyTestComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default MyTestComponent;
