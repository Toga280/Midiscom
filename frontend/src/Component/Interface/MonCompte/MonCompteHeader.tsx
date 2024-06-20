import {
  faCartArrowDown,
  faChevronLeft,
  faCircleInfo,
  faEnvelopeOpenText,
  faPencil,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Menu.css'

function MonCompteHeader(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
  mainText: string
  subText: string
}) {
  const [backHover, setBackHover] = useState<Boolean>(false)
  return (
    <div className='MonCompte-header'>
      <div className='MonCompte-header-back'>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={backHover ? { color: '#7984ba' } : {}}
          onMouseEnter={() => setBackHover(true)}
          onMouseLeave={() => setBackHover(false)}
          size='2xl'
          onClick={() => props.setInterfaceMonCompte(0)}
        />
      </div>
      {props.interfaceMonCompte === 1 && (
        <FontAwesomeIcon
          icon={faPencil}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
      )}
      {props.interfaceMonCompte === 2 && (
        <FontAwesomeIcon
          icon={faCartArrowDown}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
      )}
      {props.interfaceMonCompte === 3 && (
        <FontAwesomeIcon
          icon={faCircleInfo}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
      )}
      {props.interfaceMonCompte === 4 && (
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
      )}
      {props.interfaceMonCompte === 5 && (
        <FontAwesomeIcon
          icon={faWifi}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
      )}

      <div onClick={() => props.setInterfaceMonCompte(4)} className=''>
        <p className='MonCompte-header-head bold-text'>{props.mainText}</p>
        <p className=''>{props.subText}</p>
      </div>
    </div>
  )
}

export default MonCompteHeader
