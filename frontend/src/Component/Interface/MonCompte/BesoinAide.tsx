import React from 'react'
import MonCompteHeader from './MonCompteHeader'

function BesoinAide(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  return (
    <div className='MonCompte-selected-part'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText="Besoin d'aide ?"
        subText="Consulter les FAQ's, nous contacter ou résoudre un problème
              technique"
      />
    </div>
  )
}

export default BesoinAide
