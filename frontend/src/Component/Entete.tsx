/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './Entete.css'
import { images } from './objetImage'

function Entete(props: {
  connecter: boolean
  setInterfaceNumber: any
  setConnecter: any
}) {
  const [monCompteHovered, setMonCompteHovered] = useState<Boolean>(false)

  const deconnection = () => {
    document.documentElement.style.setProperty('--interface-width', '25vw')
    document.documentElement.style.setProperty(
      '--interface-margin-left',
      '37.5%',
    )
    props.setConnecter(false)
    props.setInterfaceNumber(0)
  }

  const handleMouseEnter = () => {
    setMonCompteHovered(true)
  }

  const handleMouseLeave = () => {
    setMonCompteHovered(false)
  }

  return (
    <div className='Entete'>
      <div className='midis-com-container'>
        <p
          onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)}
          className='Entete-midis'
        >
          midis
        </p>
        <p
          onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)}
          className='Entete-com'
        >
          com
        </p>
      </div>
      {props.connecter ? (
        <div className='account-container'>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => props.setInterfaceNumber(2)}
          >
            <div>
              {monCompteHovered ? (
                <img src={images.monCompteSelected} />
              ) : (
                <img src={images.monCompte} />
              )}
            </div>
            <div>
              <p>Mon compte</p>
            </div>
          </div>
          <div onClick={deconnection}>
            <p className='Entete-deconnection'>Déconnection</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Entete
