import React from 'react'
import MonCompteHeader from './MonCompteHeader'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'

const OuvertureExceptionnelle: MenuDeroulantInterface = {
  textPrincipal: 'Ouverture exceptionnelle',
  data: [{}],
}

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
      <MenuDeroulant menuDeroulantInterface={OuvertureExceptionnelle} />
    </div>
  )
}

export default BesoinAide
