import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Form from './components/Form';
import List from './components/List';
import Counter from './features/counter/Counter';
import CounterEffector from './components/CounterEffector';
import ListWithXState from './components/ListWithXState'; 


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/items" element={<div><Form /><List /></div>} />
          <Route path="/effector-counter" element={<CounterEffector />} />
          <Route path="/list-with-xstate" element={<ListWithXState />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
