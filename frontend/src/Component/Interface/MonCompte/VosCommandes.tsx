import React from 'react'
import MonCompteHeader from './MonCompteHeader'

function VosCommandes(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  return (
    <div className='MonCompte-selected-part'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText='Vos commandes'
        subText='Consulter voc commandes en cours et vos commandes terminées'
      />
    </div>
  )
}

export default VosCommandes
