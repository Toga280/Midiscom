import React, { useState } from 'react'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './OuvFermExceptionnelles.css'

const PeriodeDiffusionSouhaitée: MenuDeroulantInterface = {
  textPrincipal: 'Période de diffusion souhaitée',
  textSecondaire: '1 février 2024 - 10 février 2024',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

const LieuxDiffusionSpot: MenuDeroulantInterface = {
  textPrincipal: 'Lieux de diffusion du spot :',
  textSecondaire: 'Hyper',
  data: [{ info: 'nothing for now', couleur: 'red' }],
}

function SpotIntegrer() {
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Spot à intégrer
        </p>
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
        <div className='OuvFermExceptionnelles-area-no-display'>
          <div>
            <p>Intitulé de votre message</p>
          </div>
          <div>
            <input></input>
          </div>
        </div>
        <MenuDeroulant menuDeroulantInterface={PeriodeDiffusionSouhaitée} />

        <div className='OuvFermExceptionnelles-area'>
          <p>Ajouter votre fichier mp3</p>
          <div className='OuvFermExceptionnelles-button-secondaire'>
            Valider
          </div>
        </div>
        <MenuDeroulant menuDeroulantInterface={LieuxDiffusionSpot} />
        <div className='OuvFermExceptionnelles-area'>
          <p>
            J'atteste avoir les pleins droits de cet audio et assume l'entière
            reponsabilité pour une diffusion dans mon enseigne.
          </p>
        </div>
        <div className='OuvFermExceptionnelles-button'>Valider</div>
      </div>
    </div>
  )
}

export default SpotIntegrer
