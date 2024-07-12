import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartArrowDown,
  faCircleInfo,
  faEnvelopeOpenText,
  faPencil,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'

function MonCompte(props: { setInterfaceMonCompte: any }) {
  return (
    <div className='Menu'>
      <div className='MonCompte-menu-left'>
        <div className='MonCompte-button-left'>
          <div
            onClick={() => props.setInterfaceMonCompte(1)}
            className='MonCompte-vos-abonnements'
          >
            <FontAwesomeIcon icon={faPencil} size='2xl' />
            <p>Vos abonnements</p>
            <p className='MonCompte-info TextCacheMobil'>
              Voir le détail de vos abonnements, soldes de messages
            </p>
          </div>
        </div>
        <div className='MonCompte-button-left'>
          <div
            onClick={() => props.setInterfaceMonCompte(2)}
            className='MonCompte-vos-commandes'
          >
            <FontAwesomeIcon icon={faCartArrowDown} size='2xl' />
            <p>Vos commandes</p>
            <p className='MonCompte-info TextCacheMobil'>
              Consulter voc commandes en cours et vos commandes terminées
            </p>
          </div>
        </div>
        <div className='MonCompte-button-left'>
          <div
            onClick={() => props.setInterfaceMonCompte(3)}
            className='MonCompte-besoin-aide'
          >
            <FontAwesomeIcon icon={faCircleInfo} size='2xl' />
            <p>Besoin d'aide ?</p>
            <p className='MonCompte-info TextCacheMobil'>
              Consulter les FAQ's, nous contacter ou résoudre un problème
              technique
            </p>
          </div>
        </div>
      </div>
      <div className='MonCompte-menu-right'>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(4)}
            className='MonCompte-vos-adresses-contacts'
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} size='2xl' />
            <p>Vos adresses contacts</p>
            <p className='MonCompte-info TextCacheMobil'>
              Renseigner les personnes en charges de la radio E.leclerc pour
              votre magasin
            </p>
          </div>
        </div>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(5)}
            className='MonCompte-connexions'
          >
            <FontAwesomeIcon icon={faWifi} size='2xl' />
            <p>Connexions</p>
            <p className='MonCompte-info TextCacheMobil'>
              Suivre l'état de connexion de vos différents point de vente
            </p>
          </div>
        </div>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(6)}
            className='MonCompte-connexions'
          >
            <FontAwesomeIcon icon={faCircleInfo} size='2xl' />
            <p>Nous contacter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonCompte
