import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Home.js';
import Spot from './components/Spot.js';

import { useEffect, useState } from 'react';



function App() {
  const [home, setHome] = useState(false);
  return (
    <div>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
  
    {home ? <Home setHome={setHome}></Home> : <Spot setHome={setHome}></Spot>}
    

    </div>
 
  
  );
}

export default App;
