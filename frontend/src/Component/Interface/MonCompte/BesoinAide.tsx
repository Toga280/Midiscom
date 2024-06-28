import React from 'react'
import MonCompteHeader from './MonCompteHeader'
import MenuDeroulant from '../../MenuDeroulant/MenuDeroulant'
import { MenuDeroulantInterface } from '../../MenuDeroulant/MenuDeroulantInterface'
import './BesoinAide.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OuvertureExceptionnelle: MenuDeroulantInterface = {
  textPrincipal: 'Ouverture exceptionnelle',
  data: [
    { info: 'Comment programmer une ouverture exceptionnelle ?' },
    { isRetourALaLigne: true },
    {
      info: 'Comment enregistrer une ouverture exceptionnelle pour mon concept ?',
    },
    { isRetourALaLigne: true },
  ],
}

const MessagesPermanents: MenuDeroulantInterface = {
  textPrincipal: 'Messages permanents',
  data: [
    { info: 'Comment mettre en diffusion un message permanent ?' },
    { isRetourALaLigne: true },
    {
      info: "Comment suspendre la diffusion d'un message permanent ?",
    },
    { isRetourALaLigne: true },
    {
      info: "Comment modifier l'heure de passage d'un message fixe ?",
    },
    { isRetourALaLigne: true },
  ],
}

const MusiquesThematiques: MenuDeroulantInterface = {
  textPrincipal: 'Musiques thématiques',
  data: [
    { info: 'Comment mettre mes musiques de Noël ?' },
    { isRetourALaLigne: true },
    {
      info: "J'organise une soirée VIP, comment puis-je avoir de la musique ?",
    },
    { isRetourALaLigne: true },
    {
      info: 'Comment arrêter une musique thématiques ?',
    },
    { isRetourALaLigne: true },
  ],
}

const HorairesPermanents: MenuDeroulantInterface = {
  textPrincipal: 'Horaires permanents',
  data: [
    { info: 'Comment changer mes horaires pour la saison estivale ?' },
    { isRetourALaLigne: true },
    {
      info: 'Comment faire pour la musique se déclanche plus tôt le matin pour le personnel ?',
    },
    { isRetourALaLigne: true },
  ],
}

const CampagnesGalec: MenuDeroulantInterface = {
  textPrincipal: 'Campagnes Galec',
  data: [
    { info: 'Comment puis-je consulter les campagnes déjà commandées ?' },
    { isRetourALaLigne: true },
    {
      info: 'Où puis-je consulter les campagnes déjà commandées ?',
    },
    { isRetourALaLigne: true },
    {
      info: 'Comment supprimer un spot de campagne Galec de ma diffusion ?',
    },
    { isRetourALaLigne: true },
  ],
}

const SpotExpress: MenuDeroulantInterface = {
  textPrincipal: 'Spot express',
  data: [
    { info: 'Comment créer un spot express ?' },
    { isRetourALaLigne: true },
    {
      info: 'Comment consulter les spots express en diffusion ?',
    },
    { isRetourALaLigne: true },
    {
      info: 'Comment supprimer un spot express de ma diffusion ?',
    },
    { isRetourALaLigne: true },
  ],
}

const PlusDeDiffusion: MenuDeroulantInterface = {
  textPrincipal: "Je n'ai plus de diffusion.",
  data: [{ info: 'Nothing for now.' }],
}

const EntendsPasMessages: MenuDeroulantInterface = {
  textPrincipal: "Je n'entends pas mes messages.",
  data: [{ info: 'Nothing for now.' }],
}

const EntendsPlusMusique: MenuDeroulantInterface = {
  textPrincipal: "Je n'entends plus la musique.",
  data: [{ info: 'Nothing for now.' }],
}

const CoupureElectricite: MenuDeroulantInterface = {
  textPrincipal:
    "Nous avons eu une coupure d'électricité et plus rien ne fonctionne.",
  data: [{ info: 'Nothing for now.' }],
}

const MidisboxDeconnecte: MenuDeroulantInterface = {
  textPrincipal:
    "J'ai reçu un mail pour m'informer que ma midisbox est déconnecté.",
  data: [{ info: 'Nothing for now.' }],
}

const PointDeVenteDeconnecte: MenuDeroulantInterface = {
  textPrincipal: 'Comment puis-je voir le point de vente qui est déconnecté ?',
  data: [{ info: 'Nothing for now.' }],
}

function BesoinAide(props: {
  setInterfaceMonCompte: any
  interfaceMonCompte: number
}) {
  return (
    <div className='MonCompte-selected-part'>
      <MonCompteHeader
        setInterfaceMonCompte={props.setInterfaceMonCompte}
        interfaceMonCompte={props.interfaceMonCompte}
        mainText="Besoin d'aide ?"
        subText="Consulter les FAQ's, nous contacter ou résoudre un problème
              technique"
      />
      <div className='BesoinAide'>
        <div className='BesoinAide-info'>
          <p>Question fréquentes</p>
          <MenuDeroulant menuDeroulantInterface={OuvertureExceptionnelle} />
          <MenuDeroulant menuDeroulantInterface={MessagesPermanents} />
          <MenuDeroulant menuDeroulantInterface={MusiquesThematiques} />
          <MenuDeroulant menuDeroulantInterface={HorairesPermanents} />
          <MenuDeroulant menuDeroulantInterface={CampagnesGalec} />
          <MenuDeroulant menuDeroulantInterface={SpotExpress} />
          <p>Résoudre une panne</p>
          <MenuDeroulant menuDeroulantInterface={PlusDeDiffusion} />
          <MenuDeroulant menuDeroulantInterface={EntendsPasMessages} />
          <MenuDeroulant menuDeroulantInterface={EntendsPlusMusique} />
          <MenuDeroulant menuDeroulantInterface={CoupureElectricite} />
          <MenuDeroulant menuDeroulantInterface={MidisboxDeconnecte} />
          <MenuDeroulant menuDeroulantInterface={PointDeVenteDeconnecte} />
        </div>
        <div className='BesoinAide-contact'>
          <div className='BesoinAide-contact-box'>
            <div style={{ marginLeft: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>Service Technique</p>
              <div className='BesoinAide-contact-box-contact'>
                <FontAwesomeIcon icon={faPhone} size='2xl' />
                <p style={{ marginLeft: '10px' }}>05 62 71 83 11 (choix 1)</p>
              </div>
            </div>
          </div>
          <div className='BesoinAide-contact-box'>
            <div style={{ marginLeft: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>Contact commercial</p>
              <div className='BesoinAide-contact-box-contact'>
                <FontAwesomeIcon icon={faPhone} size='2xl' />
                <p style={{ marginLeft: '10px' }}>05 62 71 83 11 (choix 2)</p>
              </div>
            </div>
          </div>
          <div className='BesoinAide-contact-box' id='last'>
            <div style={{ marginLeft: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>
                Contact interface Radio E.Leclerc
              </p>
              <div className='BesoinAide-contact-box-contact'>
                <FontAwesomeIcon icon={faPhone} size='2xl' />
                <p style={{ marginLeft: '10px' }}>05 62 76 12 83</p>
              </div>
              <div className='BesoinAide-contact-box-contact'>
                <FontAwesomeIcon icon={faEnvelope} size='2xl' />
                <p style={{ marginLeft: '10px' }}>s.marketing@midis.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BesoinAide
