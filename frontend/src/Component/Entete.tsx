import React from 'react';
import './Entete.css';

function Entete(props: { connecter: boolean, setInterfaceNumber: any }) {
    return (
        <div className="Entete">
            <div className="midis-com-container">
                <p onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)} className='Entete-midis'>midis</p>
                <p onClick={() => props.setInterfaceNumber(props.connecter ? 1 : 0)} className='Entete-com'>com</p>
            </div>
            {props.connecter ? (
                <div className="account-container">
                    <div onClick={() => props.setInterfaceNumber(2)}><p>Mon compte</p></div>
                    <div onClick={() => props.setInterfaceNumber(0)}><p>Déconnection</p></div>
                </div>
            ) : null}
        </div>
    );
}

export default Entete;
