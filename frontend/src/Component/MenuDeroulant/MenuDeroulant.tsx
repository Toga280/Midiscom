import React, { useState } from 'react'
import {
  Checkbox,
  EntreText,
  MenuDeroulantInterface,
  Question,
  RetourALaLigne,
  Switch,
  TextInterface,
} from './MenuDeroulantInterface'
import './MenuDeroulant.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronUp,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'

function MenuDeroulant(props: {
  menuDeroulantInterface: MenuDeroulantInterface
}) {
  const [openHover, setOpenHover] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [hoverQuestion, setHoverQuestion] = useState<boolean>(false)

  const handleTextChange =
    (setTextAreaInput: any) =>
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTextAreaInput(e.target.value)
    }

  const handleTextChangeOnlyNumber =
    (setTextAreaInput: any) =>
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = e.target.value
      if (/^[0-9\n]*$/.test(value)) {
        setTextAreaInput(value)
      }
    }

  return (
    <div className='MenuDeroulant-Container'>
      <div className='MenuDeroulant-body'>
        <div className='MenuDeroulant'>
          <div className='MenuDeroulant-mainText'>
            <p>{props.menuDeroulantInterface.textPrincipal}</p>
            <p className='MenuDeroulant-subText'>
              {props.menuDeroulantInterface.textSecondaire}
            </p>
          </div>
          <div className='MenuDeroulant-bouton-deroule'>
            <FontAwesomeIcon
              icon={faChevronUp}
              size='xl'
              rotation={menuOpen ? undefined : 180}
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setOpenHover(true)}
              onMouseLeave={() => setOpenHover(false)}
              style={
                openHover
                  ? { color: '#7984ba', cursor: 'pointer' }
                  : { cursor: 'pointer' }
              }
            />
          </div>
        </div>
        {menuOpen ? (
          <div className='MenuDeroulant-Container-content'>
            {props.menuDeroulantInterface.data
              ? props.menuDeroulantInterface.data.map((item, index) => {
                  if (item && (item as TextInterface).info) {
                    const Item = item as TextInterface
                    return (
                      <p
                        className='MenuDeroulant-content'
                        key={index}
                        style={{
                          color: Item.couleur
                            ? Item.couleur
                            : Item.secondaire
                              ? 'gray'
                              : 'black',
                          fontWeight: Item.gras ? 'bold' : 'normal',
                          textShadow: Item.important
                            ? '0px 0px 0 black, 0px 0px 0 black, 0px 0px 0 black, 0px 0px 0 black'
                            : 'none',
                        }}
                      >
                        {Item.info}
                      </p>
                    )
                  }
                  if (item && (item as RetourALaLigne).isRetourALaLigne) {
                    return (
                      <div className='MenuDeroulant-break' key={index}></div>
                    )
                  }
                  if (item && (item as EntreText).setEntreText) {
                    const Item = item as EntreText
                    if (Item.xxl) {
                      if (Item.onlyNombre) {
                        return (
                          <textarea
                            value={Item.value}
                            onChange={handleTextChange(Item.setValue)}
                            style={{ marginRight: '10px' }}
                            key={index}
                          ></textarea>
                        )
                      } else {
                        return (
                          <textarea
                            value={Item.value}
                            onChange={handleTextChangeOnlyNumber(Item.setValue)}
                            style={{ marginRight: '10px' }}
                            key={index}
                          ></textarea>
                        )
                      }
                    } else {
                      if (Item.onlyNombre) {
                        return (
                          <input
                            value={Item.value}
                            onChange={handleTextChangeOnlyNumber(Item.setValue)}
                            style={{ marginRight: '10px' }}
                            key={index}
                          ></input>
                        )
                      } else {
                        return (
                          <input
                            value={Item.value}
                            onChange={handleTextChange(Item.setValue)}
                            style={{ marginRight: '10px' }}
                            key={index}
                          ></input>
                        )
                      }
                    }
                  }
                  if (item && (item as Switch).setSwitch) {
                    const Item = item as Switch
                    return (
                      <FontAwesomeIcon
                        icon={Item.valueSwitch ? faToggleOn : faToggleOff}
                        onClick={() => Item.setValueSwitch(!Item.valueSwitch)}
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                        key={index}
                      />
                    )
                  }
                  if (item && (item as Checkbox).setCheckbox) {
                    const Item = item as Checkbox
                    return (
                      <input
                        type='checkbox'
                        checked={Item.valueCheckbox}
                        onChange={() =>
                          Item.setValueCheckbox(!Item.valueCheckbox)
                        }
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                        key={index}
                      ></input>
                    )
                  }
                  if (item && (item as Question).setQuestion) {
                    const Item = item as Question
                    return (
                      <img
                        src={
                          !hoverQuestion
                            ? `${process.env.PUBLIC_URL}/img/Question.svg`
                            : `${process.env.PUBLIC_URL}/img/QuestionSelected.svg`
                        }
                        alt='Redirection vers la page des question'
                        className='MenuDeroulant-image'
                        onMouseEnter={() => setHoverQuestion(true)}
                        onMouseLeave={() => setHoverQuestion(false)}
                        onClick={() => Item.setRedirection(Item.redirection)}
                        key={index}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                  }
                  return null
                })
              : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default MenuDeroulant
