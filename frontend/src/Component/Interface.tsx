import React, { useState } from 'react'
import './Interface.css'
import Login from './Interface/Login'
import Accueil from './Interface/Accueil'

function Interface(props: { connecter: any, setConnecter: any, interfaceNumber: any, setInterfaceNumber: any }) {
    return (
        <div className="Interface">
            {props.interfaceNumber === 0 ? <Login setInterfaceNumber={props.setInterfaceNumber} setConnecter={props.setConnecter} /> : null}
            {props.interfaceNumber === 1 ? <Accueil /> : null}

        </div>
    )
}

export default Interface
