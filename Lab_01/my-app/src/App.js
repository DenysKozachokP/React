import React from 'react';
import Navbar from './Navbar';

function App() {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <div className="App">
      <Navbar links={links} />
    </div>
  );
}

export default App;