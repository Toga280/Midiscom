import React, { useState } from 'react'
import './Popup.css'

interface Position {
  x: number
  y: number
}

const Popup: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.pageX, y: e.pageY })
  }

  return (
    <div className='popup-container' onMouseMove={handleMouseMove}>
      <div className='popup' style={{ left: position.x, top: position.y }}>
        Contenu de la popup
      </div>
    </div>
  )
}

export default Popup
