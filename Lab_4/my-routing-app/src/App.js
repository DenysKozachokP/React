import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/level1">Level 1</Link>
          </li>
          <li>
            <Link to="/level1/level2">Level 2</Link>
          </li>
          <li>
            <Link to="/level1/level2/level3">Level 3</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="level1" element={<Level1 />} />
        <Route path="level1/level2" element={<Level2 />} />
        <Route path="level1/level2/level3" element={<Level3 />} />
      </Routes>
    </div>
  );
}

export default App;