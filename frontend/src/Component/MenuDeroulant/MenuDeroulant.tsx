import React, { useState } from 'react'
import { MenuDeroulantInterface } from './MenuDeroulantInterface'
import './MenuDeroulant.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function MenuDeroulant(props: {
  menuDeroulantInterface: MenuDeroulantInterface
}) {
  const [openHover, setOpenHover] = useState<boolean>(false)
  return (
    <div className='MenuDeroulant-Container'>
      <div className='MenuDeroulant'>
        <div className='MenuDeroulant-mainText'>
          <p>{props.menuDeroulantInterface.textPrincipal}</p>
          <p className='MenuDeroulant-subText'>
            {props.menuDeroulantInterface.textSecondaire}
          </p>
        </div>
        <div className='MenuDeroulant-bouton-deroule'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='xl'
            rotation={90}
            onMouseEnter={() => setOpenHover(true)}
            onMouseLeave={() => setOpenHover(false)}
            style={
              openHover
                ? { color: '#7984ba', cursor: 'pointer' }
                : { cursor: 'pointer' }
            }
          />
        </div>
      </div>
    </div>
  )
}

export default MenuDeroulant
