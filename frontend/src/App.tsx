import React, { useState } from 'react'
import './App.css'
import Entete from './Component/Entete'
import Interface from './Component/Interface'

function App() {
  const [connecter, setConnecter] = useState<boolean>(false)
  const [interfaceNumber, setInterfaceNumber] = useState<number>(0)

  return (
    <div className='App'>
      <div className='App-Entete'>
        <Entete
          connecter={connecter}
          setConnecter={setConnecter}
          setInterfaceNumber={setInterfaceNumber}
        />
      </div>
      <div className='App-Interface'>
        <Interface
          connecter={connecter}
          setConnecter={setConnecter}
          interfaceNumber={interfaceNumber}
          setInterfaceNumber={setInterfaceNumber}
        />
      </div>
    </div>
  )
}

export default App
