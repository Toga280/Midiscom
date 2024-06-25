import React, { useState } from 'react'
import MonCompteHeader from './MonCompteHeader'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

function BesoinAide(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  const [value, setValue] = useState<string | number>('')
  const [valueSwitch, setValueSwitch] = useState<boolean>(false)
  const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)

  const menuDeroulant1: MenuDeroulantInterface = {
    textPrincipal: 'in progress ...',
    textSecondaire: 'khgflkq',
    data: [
      { info: 'oui', couleur: 'red' },
      { info: 'oui', gras: true },
      { info: 'oui', secondaire: true },
      { info: 'oui', important: true },
      { info: 'oui', important: true, gras: true },
      { isRetourALaLigne: true },
      { info: 'oui' },
      { info: 'oui' },
      { isRetourALaLigne: true },
      { info: 'oui' },
      {
        setEntreText: true,
        value: value,
        setValue: setValue,
        onlyNombre: true,
      },
      {
        setSwitch: true,
        valueSwitch: valueSwitch,
        setValueSwitch: setValueSwitch,
      },
      { isRetourALaLigne: true },
      {
        setCheckbox: true,
        valueCheckbox: valueCheckbox,
        setValueCheckbox: setValueCheckbox,
      },
    ],
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
