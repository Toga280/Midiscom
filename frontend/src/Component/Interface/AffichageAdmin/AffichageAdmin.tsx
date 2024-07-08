import React from 'react'
import Utilisateur from './Utilisateur'

function AffichageAdmin(props: {
  switchAffichage: any
  setSwitchAffichage: any
}) {
  return (
    <div>
      {props.switchAffichage === 0 && <p></p>}
      {props.switchAffichage === 1 && <Utilisateur />}
    </div>
  )
}

export default AffichageAdmin
