import React from 'react'
import MonCompteHeader from './MonCompteHeader'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

function BesoinAide(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  const menuDeroulant1: MenuDeroulantInterface = {
    textPrincipal: 'in progress ...',
    textSecondaire: 'khgflkq',
  }

  return (
    <div className='MonCompte-selected-part'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText="Besoin d'aide ?"
        subText="Consulter les FAQ's, nous contacter ou résoudre un problème
              technique"
      />
      <MenuDeroulant menuDeroulantInterface={menuDeroulant1} />
    </div>
  )
}

export default BesoinAide
