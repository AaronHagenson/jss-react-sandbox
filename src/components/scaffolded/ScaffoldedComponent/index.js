import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ScaffoldedComponent = (props) => (
  <div>
    <p>ScaffoldedComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ScaffoldedComponent;
