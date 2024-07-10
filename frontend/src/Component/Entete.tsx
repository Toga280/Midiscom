/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './Entete.css'
import {
  faBars,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Entete(props: {
  connecter: boolean
  setInterfaceNumber: any
  setConnecter: any
  interfaceNumber: number
}) {
  const handleSwitchMenu = () => {
    var element = document.documentElement
    var styles = window.getComputedStyle(element)
    var propertyValue = styles.getPropertyValue('--interface-menu-display')
    if (propertyValue === 'none') {
      document.documentElement.style.setProperty(
        '--interface-menu-display',
        'block',
      )
    } else {
      document.documentElement.style.setProperty(
        '--interface-menu-display',
        'none',
      )
    }
  }

  const [monCompteHovered, setMonCompteHovered] = useState<Boolean>(false)

  const deconnection = () => {
    document.documentElement.style.setProperty('--interface-width', '25vw')
    document.documentElement.style.setProperty(
      '--interface-width-mobil',
      '85vw',
    )
    document.documentElement.style.setProperty(
      '--interface-margin-top-mobil',
      '2vh',
    )
    document.documentElement.style.setProperty(
      '--interface-margin-bot-mobil',
      '0%',
    )
    document.documentElement.style.setProperty(
      '--interface-height-mobil',
      'OUAIIIIIII',
    )
    document.documentElement.style.setProperty(
      '--interface-border-radius',
      '10px',
    )
    props.setConnecter(false)
    props.setInterfaceNumber(0)
  }

  return (
    <div className='Entete'>
      <div
        onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)}
        className='midis-com-container'
      >
        <p className='Entete-midis'>midis</p>
        <p className='Entete-com'>com</p>
      </div>
      {props.connecter ? (
        <div className='account-container'>
          <div
            className='Entete-mon-compte'
            onMouseEnter={() => setMonCompteHovered(true)}
            onMouseLeave={() => setMonCompteHovered(false)}
            onClick={() => props.setInterfaceNumber(2)}
          >
            <div>
              <FontAwesomeIcon
                icon={faUser}
                style={monCompteHovered ? { color: '#7984ba' } : {}}
              />
            </div>
            <div>
              <p className='TextCacheMobil'>Mon compte</p>
            </div>
          </div>
          <div className='Entete-deconnection-area' onClick={deconnection}>
            <p className='Entete-deconnection TextCacheMobil'>Déconnection</p>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className='TextCachePc'
            />
          </div>
          <div>
            {props.interfaceNumber !== 2 && (
              <FontAwesomeIcon
                icon={faBars}
                className='TextCachePc'
                onClick={handleSwitchMenu}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Entete
