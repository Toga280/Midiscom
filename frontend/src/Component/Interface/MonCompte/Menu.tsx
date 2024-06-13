import React from 'react'
import './Menu.css'

function MonCompte(props: { setInterfaceMonCompte: any }) {
  return (
    <div className='Menu'>
      <div className='MonCompte-menu-left'>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(1)}
            className='MonCompte-vos-abonnements'
          >
            <p>Vos abonnements</p>
            <p className='MonCompte-info'>
              Voir le détail de vos abonnements, soldes de messages
            </p>
          </div>
        </div>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(2)}
            className='MonCompte-vos-commandes'
          >
            <p>Vos commandes</p>
            <p className='MonCompte-info'>
              Consulter voc commandes en cours et vos commandes terminées
            </p>
          </div>
        </div>
        <div className='MonCompte-button-right'>
          <div
            onClick={() => props.setInterfaceMonCompte(3)}
            className='MonCompte-besoin-aide'
          >
            <p>Besoin d'aide ?</p>
            <p className='MonCompte-info'>
              Consulter les FAQ's, nous contacter ou résoudre un problème
              technique
            </p>
          </div>
        </div>
      </div>
      <div className='MonCompte-menu-right'>
        <div className='MonCompte-button-left'>
          <div
            onClick={() => props.setInterfaceMonCompte(4)}
            className='MonCompte-vos-adresses-contacts'
          >
            <p>Vos adresses contacts</p>
            <p className='MonCompte-info'>
              Renseigner les personnes en charges de la radio E.leclerc pour
              votre magasin
            </p>
          </div>
        </div>
        <div className='MonCompte-button-left'>
          <div
            onClick={() => props.setInterfaceMonCompte(5)}
            className='MonCompte-connexions'
          >
            <p>Connexions</p>
            <p className='MonCompte-info'>
              Suivre l'état de connexion de vos différents point de vente
            </p>
          </div>
        </div>
        <div className='MonCompte-button-nothing'>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default MonCompte
