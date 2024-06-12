import React from 'react'
import './Affichage.css'

function Affichage(props: { switchAffichage: any; setSwitchAffichage: any }) {
  return (
    <div>
      {props.switchAffichage === 0 && <p>0</p>}
      {props.switchAffichage === 1 && <p>1</p>}
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
