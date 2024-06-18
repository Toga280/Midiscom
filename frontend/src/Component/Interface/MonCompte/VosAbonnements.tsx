import React from 'react'
import MonCompteHeader from './MonCompteHeader'

function VosAbonnements(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  return (
    <div className='MonCompte-selected-part'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText='Vos abonnements'
        subText='Voir le détail de vos abonnements, soldes de messages'
      />
    </div>
  )
}

export default VosAbonnements
