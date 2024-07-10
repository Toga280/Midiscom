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
import TempsCalme from './TempsCalme'

function Affichage(props: { switchAffichage: any; setSwitchAffichage: any }) {
  return (
    <div style={{}}>
      {props.switchAffichage === 0 && (
        <div style={{ textAlign: 'center' }}>
          <br />
          <br />
          <h1>POUR RAPPEL</h1>
          <br />
          <h2> NOTRE SERVICE</h2>
          <h2>PRODUCTION AUDIO</h2>
          <h2 style={{ color: '#7984ba' }}>SERA FERME</h2>
          <br />
          <h1>DU 07 AU 20 AOÛT</h1>
        </div>
      )}
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
      {props.switchAffichage === 9 && (
        <p>
          <TempsCalme />
        </p>
      )}
    </div>
  )
}

export default Affichage
