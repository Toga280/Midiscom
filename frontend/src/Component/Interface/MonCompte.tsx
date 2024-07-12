/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './MonCompte.css'
import Menu from './MonCompte/Menu'
import { images } from '../objetImage'
import VosAbonnements from './MonCompte/VosAbonnements'
import VosCommandes from './MonCompte/VosCommandes'
import BesoinAide from './MonCompte/BesoinAide'
import VosAdressesContacts from './MonCompte/VosAdressesContacts'
import Connexions from './MonCompte/Connexions'
import NousContacter from './MonCompte/NousContacter'

function MonCompte(props: { setInterfaceNumber: any }) {
  const [interfaceMonCompte, setInterfaceMonCompte] = useState<number>(0)
  return (
    <div className='MonCompte'>
      <div className='MonCompte-client'>
        <img src={images.monCompteSelected} />
        <p className='MonCompte-monCompte' style={{ color: 'var(--violet)' }}>
          Mon_compte
        </p>
        <p className='MonCompte-numero-client'>Numéro client : XXXXXXXXXX</p>
      </div>
      <div className='MonCompte-menu'>
        {interfaceMonCompte === 0 && (
          <Menu setInterfaceMonCompte={setInterfaceMonCompte} />
        )}
        {interfaceMonCompte === 1 && (
          <VosAbonnements
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
        {interfaceMonCompte === 2 && (
          <VosCommandes
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
        {interfaceMonCompte === 3 && (
          <BesoinAide
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
        {interfaceMonCompte === 4 && (
          <VosAdressesContacts
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
        {interfaceMonCompte === 5 && (
          <Connexions
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
        {interfaceMonCompte === 6 && (
          <NousContacter
            setInterfaceMonCompte={setInterfaceMonCompte}
            interfaceMonCompte={interfaceMonCompte}
          />
        )}
      </div>
    </div>
  )
}

export default MonCompte
