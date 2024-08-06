import {
  faChartLine,
  faClockRotateLeft,
  faCloudArrowUp,
  faDesktop,
  faMessage,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { images } from '../../objetImage'
function MenuPrincipalState(props: {
  switchAffichage: any
  setSwitchAffichage: any
}) {
  return (
    <div className='MenuPrincipal'>
      <div className='MenuPrincipal-all-icon-text'>
        <div className='MenuPrincipal-icon-text-part-1'>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(1)}
          >
            <FontAwesomeIcon
              icon={faChartLine}
              className='MenuPrincipalAdmin'
            />
            <p>Statistiques messages</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(2)}
          >
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className='MenuPrincipalAdmin'
            />
            <p>Historique</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(3)}
          >
            <FontAwesomeIcon icon={faDesktop} className='MenuPrincipalAdmin' />
            <p>Monitoring</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(4)}
          >
            <FontAwesomeIcon icon={faMessage} className='MenuPrincipalAdmin' />
            <p>Envoyer un message</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(5)}
          >
            <img className='icon' src={images.spotExpress} />
            <p>Spot Express</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(6)}
          >
            <img className='icon' src={images.spotAIntegrer} />
            <p>Spot à intégrer</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onClick={() => props.setSwitchAffichage(6)}
          >
            <img className='icon' src={images.cataMidis} />
            <p>Catalogues Midis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPrincipalState
