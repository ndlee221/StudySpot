import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from '../src/components/Home/Home.js'
import Spot from '../src/components/Spot/Spot.js'


import React, { useEffect, useState } from 'react';




function App() {
  const [home, setHome] = useState(true);
  const [input, setInput] = useState(null);






  return (
    <div>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway" />
      {home ? <Home setHome={setHome} setInput={setInput}></Home> 
      : <Spot setHome={setHome} input={input} setInput={setInput}></Spot>}
    </div>


  );
}

export default App;
