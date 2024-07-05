import React, { useState } from 'react'
import MonCompteHeader from './MonCompteHeader'
import './Connexions.css'
import Popup, { Position } from '../Popup/Popup'

function Connexions(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  const [popupHover, setPopupHover] = useState<boolean>(false)
  // eslint-disable-next-line
  const [contentPopUp, setContentPopUp] = useState<string>('info')
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  const setUpPopUp = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    setPopupHover(true)
    setPosition({ x: e.pageX, y: e.pageY })
  }

  return (
    <div className='Connexions'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText='Connexions'
        subText="Suivre l'état de connexion de vos différents point de vente"
      />
      {popupHover && (
        <Popup
          contentPopUp={contentPopUp}
          position={position}
          setPopupHover={setPopupHover}
        />
      )}
      <div className='Connexion-main-body'>
        <div className='Connexions-anything-1'></div>
        <div className='Connexions-body'>
          <div className='Connexions-body-image'>
            <div className='Connexions-image'>
              <img
                src={`${process.env.PUBLIC_URL}/img/leclerc.svg`}
                alt={'E.Leclerc'}
              />
            </div>
            <div className='Connexions-image'>
              <img
                src={`${process.env.PUBLIC_URL}/img/leclerc.svg`}
                alt={'E.Leclerc'}
              />
            </div>
          </div>
          <div className='Connexions-body-etat'>
            <div className='Connexions-etat'>
              <p onClick={(e) => setUpPopUp(e)}>Connecté</p>
            </div>
            <div className='Connexions-etat'>
              <p>Connecté</p>
            </div>
          </div>
        </div>
        <div className='Connexions-anything-2'></div>
      </div>
    </div>
  )
}

export default Connexions
