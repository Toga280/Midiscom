import React, { useState } from 'react'
import './Accueil.css'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import Affichage from './Affichage/Affichage'
import AffichageAdmin from './AffichageAdmin/AffichageAdmin'
import MenuPrincipalAdmin from './MenuPrincipalAdmin/MenuPrincipalAdmin'
import MenuPrincipalState from './MenuPrincipalState/MenuPrincipalState'
import AffichageState from './AffichageState/AffichageState'

interface AccueilProps {
  isAdmin: boolean
  switchAffichage: number
  setSwitchAffichage: React.Dispatch<React.SetStateAction<number>>
}

const Accueil: React.FC<AccueilProps> = ({
  isAdmin,
  switchAffichage,
  setSwitchAffichage,
}) => {
  const [state, setState] = useState<boolean>(false)

  return (
    <div className='Accueil'>
      <div className='Accueil-menu-principal'>
        <button onClick={() => setState(!state)}>switch affichage</button>
        {isAdmin ? (
          <MenuPrincipalAdmin
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : !state ? (
          <MenuPrincipal
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : (
          <MenuPrincipalState
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        )}
      </div>
      <div className='Accueil-affichage'>
        {isAdmin ? (
          <AffichageAdmin
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : !state ? (
          <Affichage
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        ) : (
          <AffichageState
            switchAffichage={switchAffichage}
            setSwitchAffichage={setSwitchAffichage}
          />
        )}
      </div>
    </div>
  )
}

export default Accueil
