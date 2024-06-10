import React, { useState } from 'react';
import './App.css';
import Entete from './Component/Entete';
import Interface from './Component/Interface';

function App() {
  // eslint-disable-next-line
  const [connecter, setConnecter] = useState(true)
  // eslint-disable-next-line
  const [interfaceNumber, setInterfaceNumber] = useState(0)

  return (
    <div className="App">
      <div>
        <div className="App-Entete">
          <Entete connecter={connecter} setInterfaceNumber={setInterfaceNumber} />
        </div>
        <div className="App-Interface">
          <Interface />
        </div>
      </div>
    </div>
  )
}

export default App;
