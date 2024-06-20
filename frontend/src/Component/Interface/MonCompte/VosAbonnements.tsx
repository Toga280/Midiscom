import React from 'react'
import MonCompteHeader from './MonCompteHeader'
import './VosAbonnements.css'

function VosAbonnements(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  return (
    <div className='VosAbonnements'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText='Vos abonnements'
        subText='Voir le détail de vos abonnements, soldes de messages'
      />
      <div className='VosAbonnements-main-body'>
        <div className='VosAbonnements-anything-1'></div>
        <div className='VosAbonnements-body'>
          <div className='VosAbonnements-image'>
            <img
              src={`${process.env.PUBLIC_URL}/img/leclerc.svg`}
              alt={'E.Leclerc'}
            />
          </div>
          <div className='VosAbonnements-text'>
            <p>
              N° client : <span className='colored-text'>C0XXXX00</span>
            </p>
            <p className='bold-text'>Mon abonnement</p>
            <p>
              Pack : <span className='colored-text'>Premium</span>
            </p>
            <p>
              Date anniversaire :
              <span className='colored-text'> 16/12/2016</span>
            </p>
            <p>
              Nbre de spot express par an :
              <span className='colored-text'> 20</span>
            </p>
            <p>
              Nbre de spot Galec par an :
              <span className='colored-text'> 240</span>
            </p>
            <p>
              Nbre de flux : <span className='colored-text'>1</span>
            </p>
            <br />
            <p className='bold-text'>Mon solde de message</p>
            <p>
              Nbre de spot express : <span className='colored-text'>12</span>
            </p>
            <p>
              Nbre de spot Galec : <span className='colored-text'>120</span>
            </p>
          </div>
        </div>
        <div className='VosAbonnements-anything-2'></div>
      </div>
    </div>
  )
}

export default VosAbonnements
