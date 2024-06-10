import React, { useState } from 'react'
import './App.css'
import Entete from './Component/Entete'
import Interface from './Component/Interface'

function App() {
  // eslint-disable-next-line
  const [connecter, setConnecter] = useState(false)
  // eslint-disable-next-line
  const [interfaceNumber, setInterfaceNumber] = useState(0)

  return (
    <div className="App">
      <div>
        <div className="App-Entete">
          <Entete
            connecter={connecter}
            setConnecter={setConnecter}
            setInterfaceNumber={setInterfaceNumber}
          />
        </div>
        <div className="App-Interface">
          <Interface connecter={connecter} setConnecter={setConnecter} interfaceNumber={interfaceNumber} setInterfaceNumber={setInterfaceNumber} />
        </div>
      </div>
    </div>
  )
}

export default App
