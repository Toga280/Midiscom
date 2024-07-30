import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { URLAPI } from '../../../Setting'

interface Identifiant {
  login: string
  password: string
  role: 'ROLE_USER' | 'ROLE_ADMIN'
}

interface Client {
  nom: string
  adresse: string
  email: string
  numeroClient: string
  identifiant: number
}

interface Abonnement {
  nom: string
  type: string
}

interface TypeMagasin {
  nom: string
}

interface Magasin {
  nom: string
  client: number
  abonnement: number
  typeMagasin: number
}

function CreationIdentifiant() {
  const token = Cookies.get('token')
  const [affichage, setAffichage] = useState<number>(0)
  const [identifiant, setIdentifiant] = useState<Identifiant>({
    login: '',
    password: '',
    role: 'ROLE_USER',
  })
  const [client, setClient] = useState<Client>({
    nom: '',
    adresse: '',
    email: '',
    numeroClient: '',
    identifiant: 0,
  })
  const [abonnement, setAbonnement] = useState<Abonnement>({
    nom: '',
    type: '',
  })
  const [typeMagasin, setTypeMagasin] = useState<TypeMagasin>({
    nom: '',
  })
  const [magasin, setMagasin] = useState<Magasin>({
    nom: '',
    client: 0,
    abonnement: 0,
    typeMagasin: 0,
  })

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifiant({ ...identifiant, login: event.target.value })
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifiant({ ...identifiant, password: event.target.value })
  }

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setClient({ ...client, [name]: value })
  }

  const handleAbonnementChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target
    setAbonnement({ ...abonnement, [name]: value })
  }

  const handleMagasinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMagasin({ ...magasin, [name]: value })
  }

  const postIdentifiant = async () => {
    try {
      const response = await axios.post(`${URLAPI}identifiant`, identifiant, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('Response:', response.data)
      setClient({ ...client, identifiant: response.data.id })
      setAffichage(affichage + 1)
    } catch (error) {
      console.error('Error posting identifiant:', error)
    }
  }

  const postClient = async () => {
    try {
      const response = await axios.post(`${URLAPI}client`, client, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('Response:', response.data)
      setMagasin({ ...magasin, client: response.data.id })
      setAffichage(affichage + 1)
    } catch (error) {
      console.error('Error posting client:', error)
    }
  }

  const postAbonnement = async () => {
    try {
      const response = await axios.post(`${URLAPI}abonnement`, client, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('Response:', response.data)
      setMagasin({ ...magasin, abonnement: response.data.id })
      setAffichage(affichage + 1)
    } catch (error) {
      console.error('Error posting Abonnement:', error)
    }
  }

  const renderContent = () => {
    switch (affichage) {
      case 0:
        return (
          <div>
            <p>créer un identifiant</p>
            <p>login : </p>
            <input
              type='text'
              value={identifiant.login}
              onChange={handleLoginChange}
            />
            <p>password : </p>
            <input
              type='text'
              value={identifiant.password}
              onChange={handlePasswordChange}
            />
            <button
              onClick={() => {
                postIdentifiant()
              }}
            >
              Next
            </button>
          </div>
        )
      case 1:
        return (
          <div>
            <p>créer un client</p>
            <p>Nom :</p>
            <input
              type='text'
              name='nom'
              value={client.nom}
              onChange={handleClientChange}
            />
            <p>Adresse :</p>
            <input
              type='text'
              name='adresse'
              value={client.adresse}
              onChange={handleClientChange}
            />
            <p>Email :</p>
            <input
              type='text'
              name='email'
              value={client.email}
              onChange={handleClientChange}
            />
            <p>Numéro de client :</p>
            <input
              type='text'
              name='numeroClient'
              value={client.numeroClient}
              onChange={handleClientChange}
            />
            <button
              onClick={() => {
                setAffichage(affichage + 1)
                console.log(client)
              }}
            >
              Next
            </button>
          </div>
        )
      case 2:
        return (
          <div>
            <p>créer un abonnement</p>
            <p>Nom :</p>
            <input
              type='text'
              name='nom'
              value={abonnement.nom}
              onChange={handleAbonnementChange}
            />
            <p>Type :</p>
            <input
              type='text'
              name='type'
              value={abonnement.type}
              onChange={handleAbonnementChange}
            />
            <button
              onClick={() => {
                setAffichage(affichage + 1)
                console.log(abonnement)
              }}
            >
              Next
            </button>
          </div>
        )
      case 3:
        return (
          <div>
            <p>créer un magasin</p>
            <p>Nom :</p>
            <input
              type='text'
              name='nom'
              value={magasin.nom}
              onChange={handleMagasinChange}
            />
            <button
              onClick={() => {
                setAffichage(0)
                console.log(magasin)
              }}
            >
              Finish
            </button>
          </div>
        )
      default:
        return <div>Option invalide</div>
    }
  }

  return <div>{renderContent()}</div>
}

export default CreationIdentifiant
