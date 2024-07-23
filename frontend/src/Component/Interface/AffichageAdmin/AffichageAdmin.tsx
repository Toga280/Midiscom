import React from 'react'
import Utilisateur from './Utilisateur'
import UploadVideo from './UploadVideo'
import Identifiant from './Identifiant'

function AffichageAdmin(props: {
  switchAffichage: any
  setSwitchAffichage: any
}) {
  return (
    <div>
      {props.switchAffichage === 0 && <p></p>}
      {props.switchAffichage === 1 && <Utilisateur />}
      {props.switchAffichage === 2 && <Identifiant />}
      {props.switchAffichage === 3 && <UploadVideo />}
    </div>
  )
}

export default AffichageAdmin
