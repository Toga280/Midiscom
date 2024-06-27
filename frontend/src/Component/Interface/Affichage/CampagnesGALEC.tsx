import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './OuvFermExceptionnelles.css'

const AccederCampagnesGalec: MenuDeroulantInterface = {
  textPrincipal: 'Accéder aux campagnes GALEC de :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const ConsulterCampagnesGalecCommandees: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les campagnes Galec commandées',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const PeriodeDiffusionSouhaitee: MenuDeroulantInterface = {
  textPrincipal: 'Période de diffusion souhaitée :',
  textSecondaire: '1 février 2024 - 10 février 2024',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const SelectionnerMessages: MenuDeroulantInterface = {
  textPrincipal: 'Sélectionner les messages',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function CampagnesGALEC() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Campagnes GALEC
        </p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant menuDeroulantInterface={AccederCampagnesGalec} />
        <MenuDeroulant
          menuDeroulantInterface={ConsulterCampagnesGalecCommandees}
        />
        <div className='OuvFermExceptionnelles-area-no-display'>
          <p>Catalogue GALEC </p>
          <select>
            <option value='Non'>
              GALEC OP23G308G " E8 - vos Supers Pouvoirs d'achat "
            </option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={PeriodeDiffusionSouhaitee} />
        <MenuDeroulant menuDeroulantInterface={SelectionnerMessages} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default CampagnesGALEC
