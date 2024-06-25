import React from 'react'
import './Affichage.css'
import OuvFermExceptionnelles from './OuvFermExceptionnelles'

function Affichage(props: { switchAffichage: any; setSwitchAffichage: any }) {
  return (
    <div>
      {props.switchAffichage === 0 && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
      {props.switchAffichage === 1 && (
        <p>
          <OuvFermExceptionnelles />
        </p>
      )}
      {props.switchAffichage === 2 && <p>2</p>}
      {props.switchAffichage === 3 && <p>3</p>}
      {props.switchAffichage === 4 && <p>4</p>}
      {props.switchAffichage === 5 && <p>5</p>}
      {props.switchAffichage === 6 && <p>6</p>}
      {props.switchAffichage === 7 && <p>7</p>}
      {props.switchAffichage === 8 && <p>8</p>}
    </div>
  )
}

export default Affichage
