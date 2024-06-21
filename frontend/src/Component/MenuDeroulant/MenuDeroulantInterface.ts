export interface MenuDeroulantInterface {
  textPrincipal: string
  textSecondaire?: string
  menuDeroulantSecondaire?: boolean
  couleurFond?: string //hexadecimal
  data?: DataMenuDeroulant[]
}

type DataMenuDeroulant =
  | Text
  | IconeDeroulant
  | EntreText
  | Calendrier
  | Switch
  | Question
  | MenuDeroulantInterface
  | Checkbox
  | PopUp[]

interface Text {
  info: string
  couleur?: string
  gras?: boolean
  secondaire?: boolean
  important?: boolean
}

interface IconeDeroulant {
  etat?: boolean //true si ouvert, false si fermer de base
}

interface EntreText {
  onlyNombre?: boolean
  xxl?: boolean
}

interface Calendrier {
  modifiable?: boolean
}

interface Switch {
  etat?: boolean
}

interface Question {
  redirection?: number
  popUp?: PopUp[]
}

interface Checkbox {
  etat?: boolean
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
