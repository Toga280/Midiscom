import React from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

const ConsulterHorairesActuelles: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les horaires actuelles',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const ModifierHoraires: MenuDeroulantInterface = {
  textPrincipal: 'Modifier les horaires de :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const ConsulterChangementsDejaProgrammes: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les changements déjà programmés',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const DateChangementSouhaitée: MenuDeroulantInterface = {
  textPrincipal: 'Date du changement souhaitée :',
  textSecondaire: '01 février 2024',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const SelectionnerJoursConcernes: MenuDeroulantInterface = {
  textPrincipal: 'Selectionner les jours concernés',
  textSecondaire: 'Lundi - Mardi - Mercredi - Jeudi',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const HorairesFermetureReouverture: MenuDeroulantInterface = {
  textPrincipal: 'Horaires de fermeture/réouverture',
  textSecondaire: 'Pause déjeunée',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const ModifierHorairesPersonnel: MenuDeroulantInterface = {
  textPrincipal: 'Modifier les horaires du personnel',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function HorairesOuvertures() {
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Horaires d'ouvertures
        </p>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant menuDeroulantInterface={ConsulterHorairesActuelles} />
        <MenuDeroulant menuDeroulantInterface={ModifierHoraires} />
        <MenuDeroulant
          menuDeroulantInterface={ConsulterChangementsDejaProgrammes}
        />
        <MenuDeroulant menuDeroulantInterface={DateChangementSouhaitée} />
        <div className='OuvFermExceptionnelles-area'>
          <p>Journées continues ? </p>
          <select>
            <option value='Non'>Non</option>
            <option value='Oui'>Oui</option>
          </select>
        </div>
        <MenuDeroulant menuDeroulantInterface={SelectionnerJoursConcernes} />
        <MenuDeroulant menuDeroulantInterface={HorairesFermetureReouverture} />
        <MenuDeroulant menuDeroulantInterface={ModifierHorairesPersonnel} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default HorairesOuvertures
