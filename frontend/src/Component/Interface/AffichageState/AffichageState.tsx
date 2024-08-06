import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import StatistiquesMessages from './StatistiquesMessages'

function AffichageState(props: {
  switchAffichage: any
  setSwitchAffichage: any
}) {
  return (
    <div style={{}}>
      {props.switchAffichage === 0 && (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              textAlign: 'right',
              marginRight: '30px',
              marginTop: '30px',
            }}
            className='fermer'
          >
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() =>
                document.documentElement.style.setProperty(
                  '--interface-menu-display',
                  'block',
                )
              }
            />
          </div>
          <br />
          <br />
          <h1>POUR RAPPEL</h1>
          <br />
          <h2> NOTRE SERVICE</h2>
          <h2>PRODUCTION AUDIO</h2>
          <h2 style={{ color: '#7984ba' }}>SERA FERME</h2>
          <br />
          <h1>DU 07 AU 20 AOÛT</h1>
        </div>
      )}
      {props.switchAffichage === 1 && (
        <p>
          <StatistiquesMessages />
        </p>
      )}
      {props.switchAffichage === 2 && <p></p>}
      {props.switchAffichage === 3 && <p></p>}
      {props.switchAffichage === 4 && <p></p>}
      {props.switchAffichage === 5 && <p></p>}
      {props.switchAffichage === 6 && <p></p>}
      {props.switchAffichage === 7 && <p></p>}
      {props.switchAffichage === 8 && <p></p>}
      {props.switchAffichage === 9 && <p></p>}
    </div>
  )
}

export default AffichageState
