import React from 'react'
import './Affichage.css'
import OuvFermExceptionnelles from './OuvFermExceptionnelles'
import MessagesPermanents from './MessagesPermanents'
import HorairesOuvertures from './HorairesOuvertures'
import CampagnesGALEC from './CampagnesGALEC'
import SpotExpress from './SpotExpress'
import SpotIntegrer from './SpotIntegrer'
import CataloguesMidis from './CataloguesMidis'
import MusiqueThematiques from './MusiquesThématiques'

function Affichage(props: { switchAffichage: any; setSwitchAffichage: any }) {
  return (
    <div style={{}}>
      {props.switchAffichage === 0 && <p></p>}
      {props.switchAffichage === 1 && (
        <p>
          <OuvFermExceptionnelles />
        </p>
      )}
      {props.switchAffichage === 2 && (
        <p>
          <MessagesPermanents />
        </p>
      )}
      {props.switchAffichage === 3 && (
        <p>
          <MusiqueThematiques />
        </p>
      )}
      {props.switchAffichage === 4 && (
        <p>
          <HorairesOuvertures />
        </p>
      )}
      {props.switchAffichage === 5 && (
        <p>
          <CampagnesGALEC />
        </p>
      )}
      {props.switchAffichage === 6 && (
        <p>
          <SpotExpress />
        </p>
      )}
      {props.switchAffichage === 7 && (
        <p>
          <SpotIntegrer />
        </p>
      )}
      {props.switchAffichage === 8 && (
        <p>
          <CataloguesMidis />
        </p>
      )}
    </div>
  )
}

export default Affichage
