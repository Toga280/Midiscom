import React, { useState } from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'

const ConsulterHorairesActuelles: MenuDeroulantInterface = {
  textPrincipal: 'Sélectionner une thématique pour : ',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const PeriodeDiffustionSouhaitee: MenuDeroulantInterface = {
  textPrincipal: 'Période de diffusion souhaitée',
  textSecondaire: '1 février 2024 - 10 février 2024',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const DiffuserPersonnel: MenuDeroulantInterface = {
  textPrincipal: 'Diffuser la thématique pour le personnel en pré-ouverture :',
  textSecondaire: '',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function MusiqueThematiques() {
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <div style={{ width: '80%', marginLeft: '5%' }}>
          <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
            Horaires d'ouvertures
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
        <MenuDeroulant menuDeroulantInterface={ConsulterHorairesActuelles} />
        <div className='OuvFermExceptionnelles-area-no-display'>
          <select>
            <option value='Pour une opération commerciale'>
              Pour une opération commerciale
            </option>
          </select>
        </div>
        <div className='OuvFermExceptionnelles-area'>
          <p>Thèmatique :</p>
          <select>
            <option value='Nouvel an Chinois'>Nouvel an Chinois</option>
          </select>
        </div>

        <MenuDeroulant menuDeroulantInterface={PeriodeDiffustionSouhaitee} />
        <MenuDeroulant menuDeroulantInterface={DiffuserPersonnel} />
      </div>
    </div>
  )
}

export default MusiqueThematiques
