import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { URLAPI } from '../../../Setting'

interface Identifiant {
  login: string
  password: string
  role: 'ROLE_USER' | 'ROLE_ADMIN'
}

interface Abonnement {
  nom: string
  type: string
  id: number
}

interface TypeMagasin {
  nom: string
  id: number
}

interface Magasin {
  nom: string
  typeMagasin: number
  abonnement: number
}

interface Client {
  nom: string
  adresse: string
  email: string
  numeroClient: string
  idMagasin?: number
  idIdentifiant?: number
}

function CreationIdentifiant() {
  const token = Cookies.get('token')
  const [affichage, setAffichage] = useState<number>(0)
  const [client, setClient] = useState<Client>({
    nom: '',
    adresse: '',
    email: '',
    numeroClient: '',
  })
  const [identifiant, setIdentifiant] = useState<Identifiant>({
    login: '',
    password: '',
    role: 'ROLE_USER',
  })
  const [selectedTypeMagasinId, setSelectedTypeMagasinId] = useState<
    number | null
  >(null)
  const [magasin, setMagasin] = useState<Magasin>({
    nom: '',
    typeMagasin: 0,
    abonnement: 0,
  })
  const [abonnement, setAbonnement] = useState<Abonnement>({
    nom: '',
    type: '',
    id: 0,
  })
  const [identifiants, setIdentifiants] = useState<Identifiant[]>([])
  const [allTypeMagasin, setAllTypeMagasin] = useState<TypeMagasin[]>([])
  const [allAbonnement, setAllAbonnement] = useState<Abonnement[]>([])
  const [filteredAbonnements, setFilteredAbonnements] = useState<Abonnement[]>(
    [],
  )
  const [emailError, setEmailError] = useState<string>('')

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setClient({ ...client, [name]: value })

    if (name === 'email') {
      setEmailError(isEmailValid(value) ? '' : 'Adresse email invalide.')
    }
  }

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleIdentifiantChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target
    setIdentifiant({ ...identifiant, [name]: value })
  }

  const handleTypeMagasinChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedId = parseInt(event.target.value, 10)
    setSelectedTypeMagasinId(selectedId)
  }

  const handleMagasinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMagasin({ ...magasin, [name]: value })
  }

  const handleAbonnementTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedType = event.target.value
    setAbonnement({ ...abonnement, type: selectedType, nom: '' })
    setFilteredAbonnements(
      allAbonnement.filter((item) => item.type === selectedType),
    )
  }

  const handleAbonnementNomChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedAbonnement = allAbonnement.find(
      (item) =>
        item.nom === event.target.value && item.type === abonnement.type,
    )
    if (selectedAbonnement) {
      setAbonnement(selectedAbonnement)
    }
  }

  const getAllTypeMagasin = async () => {
    try {
      const response = await axios.get(`${URLAPI}typeMagasins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAllTypeMagasin(response.data['hydra:member'])
    } catch (error) {
      console.error('Error getting allTypeMagasin:', error)
    }
  }

  const getAllAbonnement = async () => {
    try {
      const response = await axios.get(`${URLAPI}abonnements`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAllAbonnement(response.data['hydra:member'])
    } catch (error) {
      console.error('Error getting allAbonnement:', error)
    }
  }

  const postMagasin = async () => {
    try {
      const response = await axios.post(
        `${URLAPI}magasin`,
        {
          ...magasin,
          typeMagasin: selectedTypeMagasinId,
          abonnement: abonnement.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      return response.data.id
    } catch (error) {
      console.error('Error posting magasin:', error)
    }
    return null
  }

  const postIdentifiants = async () => {
    try {
      const response = await axios.post(`${URLAPI}identifiant`, identifiant, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data.id
    } catch (error) {
      console.error('Error posting identifiants:', error)
    }
  }

  const postAllData = async () => {
    console.log('Client : ', client)
    console.log('Identifiant : ', identifiant)
    console.log('TypeMagasinId : ', selectedTypeMagasinId)
    console.log('NomMagasin : ', magasin)
    console.log('Abonnement : ', abonnement)
    try {
      const idMagasin = await postMagasin()
      const idIdentifiant = await postIdentifiants()

      // const clientResponse = await axios.post(`${URLAPI}client`, client, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      // const clientId = clientResponse.data.id

      console.log('All data posted successfully')
    } catch (error) {
      console.error('Error posting all data:', error)
    }
  }

  useEffect(() => {
    getAllTypeMagasin()
    getAllAbonnement()
  }, [])

  const renderContent = () => {
    switch (affichage) {
      case 0:
        return (
          <div>
            <h1>Création d'un client</h1>
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
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <p>Numéro de client :</p>
            <input
              type='text'
              name='numeroClient'
              value={client.numeroClient}
              onChange={handleClientChange}
            />
            <button
              onClick={() => setAffichage(1)}
              disabled={
                !client.nom ||
                !client.adresse ||
                !client.email ||
                !client.numeroClient ||
                !!emailError
              }
            >
              Créer Client
            </button>
          </div>
        )
      case 1:
        return (
          <div>
            <h1>Création d'un identifiant</h1>
            <p>Login :</p>
            <input
              type='text'
              name='login'
              value={identifiant.login}
              onChange={handleIdentifiantChange}
            />
            <p>Mot de passe :</p>
            <input
              type='password'
              name='password'
              value={identifiant.password}
              onChange={handleIdentifiantChange}
            />
            <button
              onClick={() => setAffichage(2)}
              disabled={!identifiant.login || !identifiant.password}
            >
              Type de Magasin
            </button>
          </div>
        )
      case 2:
        return (
          <div>
            <h1>Type de Magasin</h1>
            <select
              name='typeMagasin'
              value={selectedTypeMagasinId ?? ''}
              onChange={handleTypeMagasinChange}
            >
              <option value=''>Sélectionner un type de magasin</option>
              {allTypeMagasin.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nom}
                </option>
              ))}
            </select>
            <button
              onClick={() => setAffichage(3)}
              disabled={selectedTypeMagasinId === null}
            >
              Nom du Magasin
            </button>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>Nom du Magasin</h1>
            <p>Nom :</p>
            <input
              type='text'
              name='nom'
              value={magasin.nom}
              onChange={handleMagasinChange}
            />
            <button onClick={() => setAffichage(4)} disabled={!magasin.nom}>
              Ajouter un Abonnement
            </button>
          </div>
        )
      case 4:
        return (
          <div>
            <h1>Ajouter un Abonnement</h1>
            <p>Type :</p>
            <select
              onChange={handleAbonnementTypeChange}
              value={abonnement.type}
            >
              <option value=''>Sélectionner un type</option>
              {[...new Set(allAbonnement.map((item) => item.type))].map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ),
              )}
            </select>
            {abonnement.type && (
              <>
                <p>Nom :</p>
                <select
                  onChange={handleAbonnementNomChange}
                  value={abonnement.nom}
                >
                  <option value=''>Sélectionner un nom</option>
                  {filteredAbonnements.map((item) => (
                    <option key={item.id} value={item.nom}>
                      {item.nom}
                    </option>
                  ))}
                </select>
              </>
            )}
            <button
              onClick={postAllData}
              disabled={abonnement.type === '' || abonnement.nom === ''}
            >
              Finaliser la Création
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
