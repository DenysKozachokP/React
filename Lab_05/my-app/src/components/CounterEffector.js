import React from 'react';
import { useStore } from 'effector-react';  
import { $counter, increment, decrement } from '../stores/counterStore';
import './App.css';

const CounterEffector = () => {
  const count = useStore($counter);

  return (
    <div>
      <h2>Effector Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

export default CounterEffector;
