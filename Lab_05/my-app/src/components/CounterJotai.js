import React from 'react';
import { useAtom } from 'jotai';
import { counterAtom, incrementAtom, decrementAtom } from '../stores/counterAtom';
import './App.css';

const CounterJotai = () => {
  const [count] = useAtom(counterAtom); 
  const [, increment] = useAtom(incrementAtom); 
  const [, decrement] = useAtom(decrementAtom); 

  return (
    <div>
      <h2>Jotai Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterJotai;
