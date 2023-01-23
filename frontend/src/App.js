import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from '../src/components/Home/Home.js'
import Spot from '../src/components/Spot/Spot.js'


import React, { useEffect, useState } from 'react';




function App() {
  const [home, setHome] = useState(false);
  return (
    <div>
      {home ? <Home setHome={setHome}></Home> : <Spot setHome={setHome}></Spot>}
    </div>


  );
}

export default App;
