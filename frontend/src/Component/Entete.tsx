/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
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
