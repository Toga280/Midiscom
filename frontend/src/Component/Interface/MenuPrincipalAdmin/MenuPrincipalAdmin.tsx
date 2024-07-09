import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MenuPrincipalAdmin.css'
import React from 'react'
function MenuPrincipalAdmin(props: {
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
            <FontAwesomeIcon icon={faUsers} className='MenuPrincipalAdmin' />
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPrincipalAdmin
