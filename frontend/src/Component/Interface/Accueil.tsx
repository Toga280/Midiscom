import React, { useState } from 'react'
import './Accueil.css'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import Affichage from './Affichage/Affichage'
import AffichageAdmin from './AffichageAdmin/AffichageAdmin'
import MenuPrincipalAdmin from './MenuPrincipalAdmin/MenuPrincipalAdmin'
// import EnteteAffichage from './Affichage/EnteteAffichage'

function Accueil(props: {
  isAdmin: boolean
  switchAffichage: number
  setSwitchAffichage: any
}) {
  return (
    <div className='Accueil'>
      <div className='Accueil-menu-principal'>
        {props.isAdmin ? (
          <MenuPrincipalAdmin
            switchAffichage={props.switchAffichage}
            setSwitchAffichage={props.setSwitchAffichage}
          />
        ) : (
          <MenuPrincipal
            switchAffichage={props.switchAffichage}
            setSwitchAffichage={props.setSwitchAffichage}
          />
        )}
      </div>
      <div className='Accueil-affichage'>
        {/* <EnteteAffichage /> */}
        {props.isAdmin ? (
          <AffichageAdmin
            switchAffichage={props.switchAffichage}
            setSwitchAffichage={props.setSwitchAffichage}
          />
        ) : (
          <Affichage
            switchAffichage={props.switchAffichage}
            setSwitchAffichage={props.setSwitchAffichage}
          />
        )}
      </div>
    </div>
  )
}

export default Accueil
