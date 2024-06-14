import {
  faChevronLeft,
  faEnvelopeOpenText,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Menu.css'
import './VosAdressesContacts.css'

interface Add {
  add1: boolean
  add2: boolean
  add3: boolean
  add4: boolean
}

function VosAdressesContacts(props: { setInterfaceMonCompte: any }) {
  const [backHover, setBackHover] = useState<Boolean>(false)
  const [add, setAdd] = useState<Add>({
    add1: false,
    add2: false,
    add3: false,
    add4: false,
  })

  const toggleState = (key: keyof Add) => {
    setAdd((prevAdd) => ({
      ...prevAdd,
      [key]: !prevAdd[key],
    }))
  }

  return (
    <div className='MonCompte-selected-part'>
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
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          size='2xl'
          className='MonCompte-header-main-icon'
        />
        <div onClick={() => props.setInterfaceMonCompte(4)} className=''>
          <p className='MonCompte-header-head'>Vos adresses contacts</p>
          <p className=''>
            Renseigner les personnes en charges de la radio E.leclerc pour votre
            magasin
          </p>
        </div>
      </div>
      <div className='MonCompte-body'>
        <div className='VosAdressesContacts-body'>
          <div className='VosAdressesContacts-body-left'>
            <div className='VosAdressesContacts-body-box'>
              <div className='VosAdressesContacts-body-box-header'>
                <p className='VosAdressesContacts-body-box-header-text'>
                  Responsable communication
                </p>
                <FontAwesomeIcon
                  size='xl'
                  icon={faPlus}
                  onMouseEnter={() => toggleState('add1')}
                  onMouseLeave={() => toggleState('add1')}
                  style={add.add1 ? { color: '#7984ba' } : {}}
                  className='VosAdressesContacts-body-box-header-plus'
                />
              </div>
            </div>
            <div className='VosAdressesContacts-body-box'>
              <div className='VosAdressesContacts-body-box-header'>
                <p className='VosAdressesContacts-body-box-header-text'>
                  Commercial
                </p>
                <FontAwesomeIcon
                  size='xl'
                  icon={faPlus}
                  onMouseEnter={() => toggleState('add2')}
                  onMouseLeave={() => toggleState('add2')}
                  style={add.add2 ? { color: '#7984ba' } : {}}
                  className='VosAdressesContacts-body-box-header-plus'
                />
              </div>
            </div>
          </div>
          <div className='VosAdressesContacts-body-right'>
            <div className='VosAdressesContacts-body-box'>
              <div className='VosAdressesContacts-body-box-header'>
                <p className='VosAdressesContacts-body-box-header-text'>
                  Alerte déconnexion
                </p>
                <FontAwesomeIcon
                  size='xl'
                  icon={faPlus}
                  onMouseEnter={() => toggleState('add3')}
                  onMouseLeave={() => toggleState('add3')}
                  style={add.add3 ? { color: '#7984ba' } : {}}
                  className='VosAdressesContacts-body-box-header-plus'
                />
              </div>
            </div>
            <div className='VosAdressesContacts-body-box'>
              <div className='VosAdressesContacts-body-box-header'>
                <p className='VosAdressesContacts-body-box-header-text'>
                  Facturation
                </p>
                <FontAwesomeIcon
                  size='xl'
                  icon={faPlus}
                  onMouseEnter={() => toggleState('add4')}
                  onMouseLeave={() => toggleState('add4')}
                  style={add.add4 ? { color: '#7984ba' } : {}}
                  className='VosAdressesContacts-body-box-header-plus'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VosAdressesContacts
