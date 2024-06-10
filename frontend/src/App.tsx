import React from 'react';
import './App.css';
import Entete from './Component/Entete';
import Interface from './Component/Interface';

function App() {
  return (
    <div className="App">
      <div>
        <div className="App-Entete">
          <Entete />
        </div>
        <div className="App-Interface">
          <Interface />
        </div>
      </div>
    </div>
  )
}

export default App;
