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

function MonCompte(props: { setInterfaceNumber: any }) {
  const [interfaceMonCompte, setInterfaceMonCompte] = useState<Number>(0)
  return (
    <div className='MonCompte'>
      <div className='MonCompte-client'>
        <img src={images.monCompteSelected} />
        <p className='MonCompte-monCompte'>MonCompte</p>
        <p className='MonCompte-numero-client'>Numéro client : XXXXXXXXXX</p>
      </div>
      <div className='MonCompte-menu'>
        {interfaceMonCompte === 0 && (
          <Menu setInterfaceMonCompte={setInterfaceMonCompte} />
        )}
        {interfaceMonCompte === 1 && <VosAbonnements />}
        {interfaceMonCompte === 2 && <VosCommandes />}
        {interfaceMonCompte === 3 && <BesoinAide />}
        {interfaceMonCompte === 4 && <VosAdressesContacts />}
        {interfaceMonCompte === 5 && <Connexions />}
      </div>
    </div>
  )
}

export default MonCompte
