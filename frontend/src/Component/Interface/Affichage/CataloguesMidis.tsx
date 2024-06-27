import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './OuvFermExceptionnelles.css'

const SelectionnerMessages: MenuDeroulantInterface = {
  textPrincipal: 'Sélectionner les messages',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const PreciserHorairesOuverture: MenuDeroulantInterface = {
  textPrincipal: "Préciser vos horaires d'ouv. en VOIX OFF",
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const DiffuserMessagesDans: MenuDeroulantInterface = {
  textPrincipal: 'Diffuser les messages dans :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function CataloguesMidis() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Catalogues Midis
        </p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <div className='OuvFermExceptionnelles-area-no-display'>
          <p>Catalogue : </p>
          <select>
            <option value='U'>Teasing Foire aux vins d'automne</option>
          </select>
        </div>
        <div className='OuvFermExceptionnelles-area-no-display'>
          <select>
            <option value='Oui'>
              Commander le(s) message(s) à 15€ H.T l'unité
            </option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={SelectionnerMessages} />
        <MenuDeroulant menuDeroulantInterface={PreciserHorairesOuverture} />
        <MenuDeroulant menuDeroulantInterface={DiffuserMessagesDans} />
        <div className='OuvFermExceptionnelles-area'>
          <p>
            Je m'engage à ne pas diffuser les messages midiscom en dehors de mon
            point de ventes.
          </p>
        </div>
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default CataloguesMidis
