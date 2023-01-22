import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Home.js';
import Spot from './components/Spot.js';

import React, { useEffect, useState } from 'react';
import locationData from "./components/Data.json";
import SearchBar from "./components/SearchBar";



function App() {
  const [home, setHome] = useState(false);
  return (
    <div>
        <p>
            test
        </p>
    {/*<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>*/}

    {/*{home ? <Home setHome={setHome}></Home> : <Spot setHome={setHome}></Spot>}*/}
      <SearchBar placeholder={"Enter a Study Spot..."} data={locationData}/>


    </div>
 
  
  );
}

export default App;
