import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SecondComponent = (props) => (
  <div>
    <p>SecondComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default SecondComponent;
