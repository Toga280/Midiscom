import React, { useState } from 'react'
import './Accueil.css'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import Affichage from './Affichage/Affichage'
import AffichageAdmin from './AffichageAdmin/AffichageAdmin'
import MenuPrincipalAdmin from './MenuPrincipalAdmin/MenuPrincipalAdmin'
// import EnteteAffichage from './Affichage/EnteteAffichage'

function Accueil(props: { isAdmin: boolean }) {
  const [switchAffichage, setSwitchAffichage] = useState<number>(0)

  return (
    <div className='Accueil'>
      <div className='Accueil-menu-principal'>
        {props.isAdmin ? (
          <MenuPrincipalAdmin
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : (
          <MenuPrincipal
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        )}
      </div>
      <div className='Accueil-affichage'>
        {/* <EnteteAffichage /> */}
        {props.isAdmin ? (
          <AffichageAdmin
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : (
          <Affichage
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        )}
      </div>
    </div>
  )
}

export default Accueil
