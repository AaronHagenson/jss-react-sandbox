import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = (props) => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Text field={props.fields.heading} />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
