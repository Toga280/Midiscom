import React, { useEffect, useState } from 'react'

function RecuperationIdEtMdp(props: { setInterfaceNumber: any }) {
  const [Email, setEmail] = useState<string>('')
  const [EmailEnvoyer, setEmailEnvoyer] = useState<boolean>(false)
  const [EmailEnvoyerSucces, setEmailEnvoyerSucces] = useState<string>('')
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(event.target.value)
  }

  const envoyerMail = () => {
    setIsSending(true)
    testMailExistant()
    setTimeout(() => {
      setIsSending(false)
    }, 2000)
  }

  const testMailExistant = () => {
    if (Email === 'test@gmail.com') {
      setEmailEnvoyer(true)
      changementDuMessageDeRetour(true)
    } else {
      setEmailEnvoyer(false)
      changementDuMessageDeRetour(false)
    }
  }

  const changementDuMessageDeRetour = (isEmailSent: boolean) => {
    if (isEmailSent) {
      setEmailEnvoyerSucces('Mail envoyé avec succès')
    } else {
      setEmailEnvoyerSucces('Email non trouvé')
    }
  }

  const retour = () => {
    props.setInterfaceNumber(0)
  }

  useEffect(() => {
    if (isInitialized) {
    } else {
      setIsInitialized(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [EmailEnvoyer])

  return (
    <div className='Login'>
      <div className='Login-text'>
        <p>Récupération du compte</p>
      </div>
      <div className='Login-container-textarea'>
        <div className='Login-textarea'>
          <p>Email associé à votre compte</p>
          <textarea value={Email} onChange={handleChangeEmail} rows={1} />
        </div>
      </div>
      <div>
        <p>{EmailEnvoyerSucces}</p>
      </div>
      <div className='Login-button'>
        <div
          className='Login-button-se-connecter'
          onClick={envoyerMail}
          style={{
            cursor: isSending ? 'not-allowed' : 'pointer',
            pointerEvents: isSending ? 'none' : 'auto',
          }}
        >
          {isSending ? (
            <span>Envoi en cours...</span>
          ) : (
            'Envoyer les identifiants'
          )}
        </div>
        <div className='Login-button-mdp-oublié' onClick={retour}>
          Retour
        </div>
      </div>
    </div>
  )
}

export default RecuperationIdEtMdp
