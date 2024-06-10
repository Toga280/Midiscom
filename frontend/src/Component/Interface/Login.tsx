import React, { useState } from 'react'
import './Login.css'

function Login(props: { setInterfaceNumber: any, setConnecter: any }) {
    const [id, setId] = useState(String)
    const [mdp, setMdp] = useState(String)

    const handleChangeId = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setId(event.target.value)
    }
    const handleChangeMdp = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMdp(event.target.value)
    }

    const connection = () => {
        props.setConnecter(true)
        props.setInterfaceNumber(1)
    }

    return (
        <div>
            <div>
                <p>Identification</p>
                <p>Espace Abonné</p>
            </div>
            <div>
                <textarea value={id} onChange={handleChangeId} />
            </div>
            <div>
                <textarea value={mdp} onChange={handleChangeMdp} />
            </div>
            <div onClick={connection}>SE CONNECTER</div>
            <div onClick={() => props.setInterfaceNumber(3)}>Mot de passe ou Identifiant oublié ?</div>
        </div>
    )
}

export default Login
