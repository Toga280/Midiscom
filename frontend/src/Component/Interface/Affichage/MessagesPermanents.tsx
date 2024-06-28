import React, { useState } from 'react'
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
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
    <div className='OuvFermExceptionnelles'>
      <div className='OuvFermExceptionnelles-header'>
        <p style={{ fontWeight: 'bolder', marginLeft: '5%' }}>
          Messages permanents
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
