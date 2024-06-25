import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

const ConsulterOuvFermDejaEnregistre: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les ouvertures et fermetures déjà enregistrées',
  textSecondaire: '',
  data: [{ info: 'notiong for now', couleur: 'red' }],
}

const LeChangementConcerne: MenuDeroulantInterface = {
  textPrincipal: 'Le changement concerne :',
  textSecondaire: 'Une ouverture exceptionnelle',
  data: [{ info: 'notiong for now', couleur: 'red' }],
}

function MessagesPermanents() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Ouv/Ferm Exceptionnelles
        </p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant
          menuDeroulantInterface={ConsulterOuvFermDejaEnregistre}
        />
        <MenuDeroulant menuDeroulantInterface={LeChangementConcerne} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default MessagesPermanents
