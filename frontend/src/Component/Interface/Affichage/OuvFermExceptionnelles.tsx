import React, { useState } from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './OuvFermExceptionnelles.css'

const ConsulterOuvFermDejaEnregistre: MenuDeroulantInterface = {
  textPrincipal: 'Consulter les ouvertures et fermetures déjà enregistrées',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const LeChangementConcerne: MenuDeroulantInterface = {
  textPrincipal: 'Le changement concerne :',
  textSecondaire: 'Une ouverture exceptionnelle',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const DateSouhaitée: MenuDeroulantInterface = {
  textPrincipal: 'Date Souhaitée',
  textSecondaire: '28 octobre 2023',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const HorairesOuverture: MenuDeroulantInterface = {
  textPrincipal: "Horaires d'ouverture :",
  textSecondaire: '08h30-19h30',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const EnregistrerPour: MenuDeroulantInterface = {
  textPrincipal: 'Enregistrer pour :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function OuvFermExceptionnelles() {
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <div style={{ width: '80%', marginLeft: '5%' }}>
          <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
            Ouv/Ferm Exceptionnelles
          </p>
        </div>
        <img
          src={
            questionHover
              ? `${process.env.PUBLIC_URL}/img/QuestionSelected.svg`
              : `${process.env.PUBLIC_URL}/img/Question.svg`
          }
          alt='Logo'
          style={{ width: '50px', height: 'auto', cursor: 'pointer' }}
          onMouseEnter={() => setQuestionHover(true)}
          onMouseLeave={() => setQuestionHover(false)}
        />
      </div>
      <div className='OuvFermExceptionnelles-body'>
        <MenuDeroulant
          menuDeroulantInterface={ConsulterOuvFermDejaEnregistre}
        />
        <MenuDeroulant menuDeroulantInterface={LeChangementConcerne} />
        <MenuDeroulant menuDeroulantInterface={DateSouhaitée} />
        <MenuDeroulant menuDeroulantInterface={HorairesOuverture} />
        <MenuDeroulant menuDeroulantInterface={EnregistrerPour} />
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default OuvFermExceptionnelles
