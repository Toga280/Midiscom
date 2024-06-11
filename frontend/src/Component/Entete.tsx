/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Entete.css'
// @ts-ignore
import iconeMonCompte from '../img/ICO_MonCompte_N.svg'

function Entete(props: { connecter: boolean; setInterfaceNumber: any; setConnecter: any }) {
    const deconnection = () => {
        props.setConnecter(false)
        props.setInterfaceNumber(0)
    }
    return (
        <div className="Entete">
            <div className="midis-com-container">
                <p
                    onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)}
                    className="Entete-midis"
                >
                    midis
                </p>
                <p
                    onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)}
                    className="Entete-com"
                >
                    com
                </p>
            </div>
            {props.connecter ? (
                <div className="account-container">
                    <div onClick={() => props.setInterfaceNumber(2)}>
                        <div>
                            <img src={iconeMonCompte} />
                        </div>
                        <div>
                            <p>Mon compte</p>
                        </div>
                    </div>
                    <div onClick={deconnection}>
                        <p className="Entete-deconnection">Déconnection</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Entete
