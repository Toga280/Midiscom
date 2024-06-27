import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './OuvFermExceptionnelles.css'

const ConsulterSpotsDejaCrees: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les spots déjà créés',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const EcrivezVotreTexte: MenuDeroulantInterface = {
  textPrincipal: 'Ecrivez votre texte :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const DiffuserSpotDans: MenuDeroulantInterface = {
  textPrincipal: 'Diffuser le spot dans :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function SpotExpress() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>Spot express</p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant menuDeroulantInterface={ConsulterSpotsDejaCrees} />
        <div className='OuvFermExceptionnelles-area-no-display'>
          <div>
            <p>Intitulé de votre message à créer</p>
          </div>
          <div>
            <input></input>
          </div>
        </div>
        <div className='OuvFermExceptionnelles-area'>
          <p>Type de voix :</p>
          <select>
            <option value='Feminie'>Féminine</option>
          </select>
        </div>
        <div className='OuvFermExceptionnelles-area'>
          <p>Une Introduction ? </p>
          <select>
            <option value='Oui'>Oui</option>
            <option value='Non'>Non</option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={EcrivezVotreTexte} />
        <div className='OuvFermExceptionnelles-area'>
          <p>Une Conclusion ?</p>
          <select>
            <option value='Oui'>Oui</option>
          </select>
        </div>
        <div className='OuvFermExceptionnelles-area-no-display'>
          <select>
            <option value='Jungle... Clap... E.Leclerc'>
              Jungle... Clap... E.Leclerc
            </option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={DiffuserSpotDans} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default SpotExpress
