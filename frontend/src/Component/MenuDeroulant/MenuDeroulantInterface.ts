export interface MenuDeroulantInterface {
  textPrincipal: string
  textSecondaire?: string
  menuDeroulantSecondaire?: boolean
  couleurFond?: string //hexadecimal
  data: DataMenuDeroulant[]
}

type DataMenuDeroulant =
  | TextInterface
  | IconeDeroulant
  | EntreText
  | Calendrier
  | Switch
  | Question
  | MenuDeroulantInterface
  | Checkbox
  | PopUp[]
  | RetourALaLigne

export interface TextInterface {
  info: string
  couleur?: string
  gras?: boolean
  secondaire?: boolean
  important?: boolean //gras x2
}

interface IconeDeroulant {
  // ?? jcp ce que j'ai fumé
  etat?: boolean //true si ouvert, false si fermer de base
}

export interface EntreText {
  setEntreText: boolean
  value: string | number
  setValue: React.Dispatch<React.SetStateAction<string | number>>
  onlyNombre?: boolean
  xxl?: boolean
}

interface Calendrier {
  modifiable?: boolean
}

export interface Switch {
  setSwitch: boolean
  valueSwitch: boolean
  setValueSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Question {
  setQuestion: boolean
  setRedirection: React.Dispatch<React.SetStateAction<number>>
  redirection: number
  popUp?: PopUp[]
}

export interface Checkbox {
  setCheckbox: boolean
  valueCheckbox: boolean
  setValueCheckbox: React.Dispatch<React.SetStateAction<boolean>>
}

interface PopUp {
  text: string
  couleur?: string // de base noire
  bold?: boolean
  icone?: string // pour l'instant seulement le point d'exclamation, a definir seulement les caleur possible dans le string.
  br?: boolean // faire un saut de ligne
  sautDeLigne?: boolean // se fait avent le text
  bouton?: Bouton
}

interface Bouton {
  text: string
  couleur?: string // de base noire
  couleurFond?: string // de base violet
  bordure?: BordureBouton
}

interface BordureBouton {
  couleur: string // en hexadecimal
  epaisseur: number // en px
}

export interface RetourALaLigne {
  isRetourALaLigne: boolean
}
