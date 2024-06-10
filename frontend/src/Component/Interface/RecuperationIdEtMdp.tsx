import React, { useState } from 'react'

function RecuperationIdEtMdp(props: { setInterfaceNumber: any }) {
    const [Email, setEmail] = useState(String)
    const [EmailEnvoyer, setEmailEnvoyer] = useState(false)

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }

    const envoyerMail = () => {
        setEmailEnvoyer(true)
    }

    const login = () => {
        setEmailEnvoyer(false)
        props.setInterfaceNumber(0)
    }

    return (
        <div>{!EmailEnvoyer ?
            <div>
                <p>Email associer a votre compte</p>
                <textarea value={Email} onChange={handleChangeEmail} />
                <p onClick={envoyerMail}>Envoyer les identifiants</p>
            </div>
            :
            <div>
                <p>si le mail existe dans notre base de donné, nous vous enverrons un mail avec vos identifiants</p>
                <p onClick={login}>SE CONNECTER</p>
            </div>
        }
        </div>
    )
}

export default RecuperationIdEtMdp