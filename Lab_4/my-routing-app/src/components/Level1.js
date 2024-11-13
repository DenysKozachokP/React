import React from 'react';
import { Link } from 'react-router-dom';
function Level1() {
  return (<div>
  <h1>Level 1</h1>
  <p>This is the 1 nested level.</p>
  <Link to="/">Go to Home</Link><br/>
  <Link to="/level1/level2/">Go to Level 2</Link><br/>
  <Link to="/level1/level2/level3">Go to Level 3</Link>
</div>);;
}

export default Level1;