import React, { useState } from 'react'
import './Accueil.css'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import Affichage from './Affichage/Affichage'

function Accueil() {
  const [switchAffichage, setSwitchAffichage] = useState<number>(0)

  return (
    <div className='Accueil'>
      <div className='Accueil-menu-principal'>
        <MenuPrincipal
          switchAffichage={switchAffichage}
          setSwitchAffichage={setSwitchAffichage}
        />
      </div>
      <div className='Accueil-affichage'>
        <Affichage
          switchAffichage={switchAffichage}
          setSwitchAffichage={setSwitchAffichage}
        />
      </div>
    </div>
  )
}

export default Accueil
