import React, { useState } from 'react'
import './Interface.css'
import Login from './Interface/Login'
import Accueil from './Interface/Accueil'
import MonCompte from './Interface/MonCompte'
import RecuperationIdEtMdp from './Interface/RecuperationIdEtMdp'

function Interface(props: {
  connecter: boolean
  setConnecter: any
  interfaceNumber: number
  setInterfaceNumber: any
  switchAffichage: number
  setSwitchAffichage: any
}) {
  const [isAdmin, setIsAdmin] = useState<boolean>(true)
  return (
    <div className='Interface'>
      {props.interfaceNumber === 0 ? (
        <Login
          setInterfaceNumber={props.setInterfaceNumber}
          setConnecter={props.setConnecter}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />
      ) : null}
      {props.interfaceNumber === 1 ? (
        <Accueil
          isAdmin={isAdmin}
          switchAffichage={props.switchAffichage}
          setSwitchAffichage={props.setSwitchAffichage}
        />
      ) : null}
      {props.interfaceNumber === 2 ? (
        <MonCompte setInterfaceNumber={props.setInterfaceNumber} />
      ) : null}
      {props.interfaceNumber === 3 ? (
        <RecuperationIdEtMdp setInterfaceNumber={props.setInterfaceNumber} />
      ) : null}
    </div>
  )
}

export default Interface
