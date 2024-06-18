import React, { useState } from 'react'
import './Popup.css'

export interface Position {
  x: number
  y: number
}

const Popup = (props: {
  contentPopUp: string
  position: Position
  setPopupHover: any
}) => {
  return (
    <div className='popup-container' onClick={() => props.setPopupHover(false)}>
      <div
        className='popup'
        style={{ left: props.position.x, top: props.position.y }}
      >
        {props.contentPopUp}
      </div>
    </div>
  )
}

export default Popup
