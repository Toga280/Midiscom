/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './MenuPrincipal.css'
import { images } from '../../objetImage'

function MenuPrincipal(props: {
  switchAffichage: any
  setSwitchAffichage: any
}) {
  const [
    ouvertureFermetureExceptionnelHover,
    setOuvertureFermetureExceptionnelHover,
  ] = useState<Boolean>(false)
  const [messageHover, setMessageHover] = useState<Boolean>(false)
  const [musiqueHover, selMusiqueHover] = useState<Boolean>(false)
  const [horaireHover, setHoraireHover] = useState<Boolean>(false)
  const [galecHover, setGalecHover] = useState<Boolean>(false)
  const [spotExpressHover, setSpotExpressHover] = useState<Boolean>(false)
  const [spotAIntegrerHover, setSpotAIntegrerHover] = useState<Boolean>(false)
  const [cataMidisHover, setCataMidisHover] = useState<Boolean>(false)

  useEffect(() => {
    switch (props.switchAffichage) {
      case 1:
        setMessageHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 2:
        setOuvertureFermetureExceptionnelHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 3:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 4:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        selMusiqueHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 5:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 6:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotAIntegrerHover(false)
        setCataMidisHover(false)
        break
      case 7:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setCataMidisHover(false)
        break
      case 8:
        setOuvertureFermetureExceptionnelHover(false)
        setMessageHover(false)
        selMusiqueHover(false)
        setHoraireHover(false)
        setGalecHover(false)
        setSpotExpressHover(false)
        setSpotAIntegrerHover(false)
        break
    }
  }, [props.switchAffichage])

  return (
    <div className='MenuPrincipal'>
      <div className='MenuPrincipal-all-icon-text'>
        <div className='MenuPrincipal-icon-text-part-1'>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setOuvertureFermetureExceptionnelHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 1 &&
              setOuvertureFermetureExceptionnelHover(false)
            }
            onClick={() => props.setSwitchAffichage(1)}
          >
            {ouvertureFermetureExceptionnelHover ? (
              <img
                className='icon'
                src={images.overtureFermetureExceptionnelSelected}
              />
            ) : (
              <img
                className='icon'
                src={images.overtureFermetureExceptionnel}
              />
            )}
            <p>Ouv/Ferm exceptionnelles</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setMessageHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 2 && setMessageHover(false)
            }
            onClick={() => props.setSwitchAffichage(2)}
          >
            {messageHover ? (
              <img className='icon' src={images.messageSelected} />
            ) : (
              <img className='icon' src={images.message} />
            )}
            <p>Messages permanents</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => selMusiqueHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 3 && selMusiqueHover(false)
            }
            onClick={() => props.setSwitchAffichage(3)}
          >
            {musiqueHover ? (
              <img className='icon' src={images.musiqueSelected} />
            ) : (
              <img className='icon' src={images.musique} />
            )}
            <p>Musiques thématiques</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setHoraireHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 4 && setHoraireHover(false)
            }
            onClick={() => props.setSwitchAffichage(4)}
          >
            {horaireHover ? (
              <img className='icon' src={images.horaireSelected} />
            ) : (
              <img className='icon' src={images.horaire} />
            )}
            <p>Horaires d'ouvertures</p>
          </div>
        </div>
        <div className='MenuPrincipal-icon-text-part-2'>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setGalecHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 5 && setGalecHover(false)
            }
            onClick={() => props.setSwitchAffichage(5)}
          >
            {galecHover ? (
              <img className='icon' src={images.galecSelected} />
            ) : (
              <img className='icon' src={images.galec} />
            )}
            <p>Campagnes GALEC</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setSpotExpressHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 6 && setSpotExpressHover(false)
            }
            onClick={() => props.setSwitchAffichage(6)}
          >
            {spotExpressHover ? (
              <img className='icon' src={images.spotExpressSelected} />
            ) : (
              <img className='icon' src={images.spotExpress} />
            )}
            <p>Spot Express</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setSpotAIntegrerHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 7 && setSpotAIntegrerHover(false)
            }
            onClick={() => props.setSwitchAffichage(7)}
          >
            {spotAIntegrerHover ? (
              <img className='icon' src={images.spotAIntegrerSelected} />
            ) : (
              <img className='icon' src={images.spotAIntegrer} />
            )}
            <p>Spot a intégrer</p>
          </div>
          <div
            className='MenuPrincipal-icon-text'
            onMouseEnter={() => setCataMidisHover(true)}
            onMouseLeave={() =>
              props.switchAffichage !== 8 && setCataMidisHover(false)
            }
            onClick={() => props.setSwitchAffichage(8)}
          >
            {cataMidisHover ? (
              <img className='icon' src={images.cataMidisSelected} />
            ) : (
              <img className='icon' src={images.cataMidis} />
            )}
            <p>Catalogues Midis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPrincipal
