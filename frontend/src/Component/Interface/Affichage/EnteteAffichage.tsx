import React, { useState } from 'react'
function EnteteAffichage() {
  const [questionHover, setQuestionHover] = useState<boolean>(false)
  return (
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
  )
}

export default EnteteAffichage
