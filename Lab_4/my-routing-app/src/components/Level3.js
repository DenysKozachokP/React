import React from 'react';
import { Link } from 'react-router-dom';
function Level3() {
 return (<div>
    <h1>Level 3</h1>
    <p>This is the 3 nested level.</p>
    <Link to="/">Go to Home</Link><br/>
    <Link to="/level1">Go to Level 1</Link><br/>
    <Link to="/level1/level2">Go to Level 2</Link>
  </div>);;

}

export default Level3;