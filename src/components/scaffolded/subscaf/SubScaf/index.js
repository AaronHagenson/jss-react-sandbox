import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SubScaf = (props) => (
  <div>
    <p>SubScaf Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default SubScaf;
