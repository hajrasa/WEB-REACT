import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
