import React from 'react';
import { Link } from 'react-router-dom';
import '../components/App.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/items">Go to Form and List</Link> 
          </li>
          <li>
            <Link to="/counter">Go to Counter</Link> 
          </li>
          <li>
            <Link to="/about">About</Link> 
          </li>
          <li>
            <Link to="/effector-counter">Go to Effector Counter</Link>
          </li>
          <li>
            <Link to="/list-with-xstate">Go to List with XState</Link> 
          </li>
          <li>
            <Link to="/jotai-counter">Go to Jotai Counter</Link> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
