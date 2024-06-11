import React from 'react'
import './Interface.css'
import Login from './Interface/Login'
import Accueil from './Interface/Accueil'
import MonCompte from './Interface/MonCompte'
import RecuperationIdEtMdp from './Interface/RecuperationIdEtMdp'

function Interface(props: {
  connecter: any
  setConnecter: any
  interfaceNumber: any
  setInterfaceNumber: any
}) {
  return (
    <div className='Interface'>
      {props.interfaceNumber === 0 ? (
        <Login
          setInterfaceNumber={props.setInterfaceNumber}
          setConnecter={props.setConnecter}
        />
      ) : null}
      {props.interfaceNumber === 1 ? <Accueil /> : null}
      {props.interfaceNumber === 2 ? <MonCompte /> : null}
      {props.interfaceNumber === 3 ? (
        <RecuperationIdEtMdp setInterfaceNumber={props.setInterfaceNumber} />
      ) : null}
    </div>
  )
}

export default Interface
