import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

const ConsulterOuvFermDejaEnregistre: MenuDeroulantInterface = {
  textPrincipal: 'Modifier les messages permanents de :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const LeChangementConcerne: MenuDeroulantInterface = {
  textPrincipal: 'Vos messages fixes :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function MessagesPermanents() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Messages permanents
        </p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant
          menuDeroulantInterface={ConsulterOuvFermDejaEnregistre}
        />
        <div className='OuvFermExceptionnelles-area'>
          <p>Type de messages : </p>
          <select>
            <option value='Fixes'>Fixes</option>
            <option value='En rotation'>En rotation</option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={LeChangementConcerne} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default MessagesPermanents
