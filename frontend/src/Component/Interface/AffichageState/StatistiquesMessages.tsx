import React, { useState } from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

const AccederCampagnesGalec: MenuDeroulantInterface = {
  textPrincipal: 'Accéder aux statistiques de diffusion de :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const ConsulterCampagnesGalecCommandees: MenuDeroulantInterface = {
  textPrincipal: 'Origine du ou des messages :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const PeriodeDiffusionSouhaitee: MenuDeroulantInterface = {
  textPrincipal: "Choix de l'opération :",
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const SelectionnerMessages: MenuDeroulantInterface = {
  textPrincipal: 'Choix du message :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function StatistiquesMessages() {
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <div style={{ width: '80%', marginLeft: '5%' }}>
          <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
            Statistiques messages
          </p>
        </div>
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant menuDeroulantInterface={AccederCampagnesGalec} />
        <MenuDeroulant
          menuDeroulantInterface={ConsulterCampagnesGalecCommandees}
        />
        <MenuDeroulant menuDeroulantInterface={PeriodeDiffusionSouhaitee} />
        <MenuDeroulant menuDeroulantInterface={SelectionnerMessages} />
        <div className='OuvFermExceptionnelles-button'>
          Exporter les données
        </div>
      </div>
    </div>
  )
}

export default StatistiquesMessages
