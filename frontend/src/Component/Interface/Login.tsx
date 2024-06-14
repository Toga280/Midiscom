import React, { useRef, useState } from 'react'
import './Login.css'

function Login(props: { setInterfaceNumber: any; setConnecter: any }) {
  const [id, setId] = useState('')
  const [mdp, setMdp] = useState('')

  const handleChangeId = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setId(event.target.value)
  }

  const handleChangeMdp = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMdp(event.target.value)
  }

  const connection = () => {
    props.setConnecter(true)
    props.setInterfaceNumber(1)
    document.documentElement.style.setProperty('--interface-width', '50vw')
    document.documentElement.style.setProperty('--interface-margin-left', '25%')
    document.documentElement.style.setProperty(
      '--interface-width-mobil',
      '100vw',
    )
    document.documentElement.style.setProperty(
      '--interface-margin-left-mobil',
      '0%',
    )
    document.documentElement.style.setProperty(
      '--interface-margin-top-mobil',
      '0vh',
    )
    document.documentElement.style.setProperty(
      '--interface-margin-bot-mobil',
      '0%',
    )
    document.documentElement.style.setProperty(
      '--interface-height-mobil',
      '100%',
    )
    document.documentElement.style.setProperty(
      '--interface-border-radius',
      '0px',
    )
  }

  const textArea2Ref = useRef<HTMLTextAreaElement | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (textArea2Ref.current) {
        textArea2Ref.current.focus()
      }
    }
  }

  const handleKeyDownValide = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      connection()
    }
  }

  return (
    <div className='Login'>
      <div className='Login-text'>
        <p>Identification</p>
        <p className='Login-text-espace-abonne'>Espace Abonné</p>
      </div>
      <div className='Login-container-textarea'>
        <div className='Login-textarea'>
          <p>Identifiant</p>
          <textarea
            value={id}
            onChange={handleChangeId}
            rows={1}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className='Login-textarea'>
          <p>Mot de passe</p>
          <textarea
            ref={textArea2Ref}
            value={mdp}
            onChange={handleChangeMdp}
            rows={1}
            onKeyDown={handleKeyDownValide}
          />
        </div>
      </div>
      <div className='Login-button'>
        <div className='Login-button-se-connecter' onClick={connection}>
          SE CONNECTER
        </div>
        <div
          className='Login-button-mdp-oublié'
          onClick={() => props.setInterfaceNumber(3)}
        >
          Mot de passe ou Identifiant oublié ?
        </div>
      </div>
    </div>
  )
}

export default Login
