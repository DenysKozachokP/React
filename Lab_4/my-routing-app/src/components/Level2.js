import React from 'react';
import { Link } from 'react-router-dom';

function Level2() {
  return (
    <div>
        <h1>Level 2</h1>
        <p>This is the 2 nested level.</p>
        <Link to="/">Go to Home</Link><br/>
        <Link to="/level1">Go to Level 1</Link><br/>
        <Link to="/level1/level2/level3">Go to Level 3</Link>
    </div>);
}

export default Level2;
