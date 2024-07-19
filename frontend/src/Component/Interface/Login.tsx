import React, { useRef, useState } from 'react'
import './Login.css'
import axios from 'axios'
import Cookies from 'js-cookie'

function Login(props: {
  setInterfaceNumber: any
  setConnecter: any
  isAdmin: boolean
  setIsAdmin: any
}) {
  const [id, setId] = useState<string>('')
  const [mdp, setMdp] = useState<string>('')
  const [erreurConnection, setErreurConnection] = useState<number | null>(null)

  const setToken = (token: string) => {
    Cookies.set('token', token, { expires: 7 }) // Le token sera valide pendant 7 jours
  }

  const handleChangeId = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setId(event.target.value)
  }

  const handleChangeMdp = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMdp(event.target.value)
  }

  const requestConnection = async (): Promise<boolean> => {
    try {
      const response = await axios.post(
        'http://olfdif.midis.com:82/auth',
        { login: id, password: mdp },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = response.data
      console.log(response)
      if (response.status === 200) {
        setToken(data.token)
        return true
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.log('erreur lors de la connection, mauvais identifiants ou mdp')
        setErreurConnection(401)
        return false
      } else {
        console.error('Error:', error)
        return false
      }
    }
    return false
  }

  const connection = async () => {
    setErreurConnection(null)
    const success = await requestConnection()
    if (/*success*/ true) {
      props.setConnecter(true)
      props.setInterfaceNumber(1)
      props.isAdmin
        ? document.documentElement.style.setProperty(
            '--interface-width',
            '95vw',
          )
        : document.documentElement.style.setProperty(
            '--interface-width',
            '50vw',
          )
      document.documentElement.style.setProperty(
        '--interface-margin-left',
        '25%',
      )
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
        {erreurConnection === 401 ? <p>Movais ID ou MDP</p> : null}
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
