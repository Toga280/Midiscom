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
}

interface TypeMagasin {
  nom: string
  id?: number
}

interface Magasin {
  nom: string
  typeMagasin: number
}

interface Client {
  nom: string
  adresse: string
  email: string
  numeroClient: string
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
  const [typeMagasin, setTypeMagasin] = useState<TypeMagasin>({
    nom: '',
  })
  const [magasin, setMagasin] = useState<Magasin>({
    nom: '',
    typeMagasin: 0,
  })
  const [abonnement, setAbonnement] = useState<Abonnement>({
    nom: '',
    type: '',
  })
  const [clientID, setClientID] = useState<number | null>(null)
  const [identifiants, setIdentifiants] = useState<Identifiant[]>([])
  const [allTypeMagasin, setAllTypeMagasin] = useState<TypeMagasin[]>([])
  const [allAbonnement, setAllAbonnement] = useState<Abonnement[]>([])
  const [filteredAbonnements, setFilteredAbonnements] = useState<Abonnement[]>(
    [],
  )

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setClient({ ...client, [name]: value })
  }

  const handleIdentifiantChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target
    setIdentifiant({ ...identifiant, [name]: value })
  }

  const handleTypeMagasinChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTypeMagasin({ nom: event.target.value })
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
    setAbonnement({ ...abonnement, nom: event.target.value })
  }

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIdentifiant({
      ...identifiant,
      role: event.target.value as 'ROLE_USER' | 'ROLE_ADMIN',
    })
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

  const postTypeMagasin = async () => {
    if (!typeMagasin.nom) return null
    try {
      const response = await axios.post(`${URLAPI}typeMagasin`, typeMagasin, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data.id
    } catch (error) {
      console.error('Error posting typeMagasin:', error)
    }
    return null
  }

  const postMagasin = async (typeMagasinId: number) => {
    try {
      const response = await axios.post(
        `${URLAPI}magasin`,
        { ...magasin, typeMagasin: typeMagasinId },
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

  const postAbonnement = async (magasinId: number) => {
    try {
      const response = await axios.post(
        `${URLAPI}abonnement`,
        { ...abonnement, magasin: magasinId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      return response.data.id
    } catch (error) {
      console.error('Error posting abonnement:', error)
    }
    return null
  }

  const postIdentifiants = async (
    clientId: number,
    magasinId: number,
    abonnementId: number,
  ) => {
    try {
      for (const id of identifiants) {
        await axios.post(
          `${URLAPI}identifiant`,
          {
            ...id,
            client: clientId,
            magasin: magasinId,
            abonnement: abonnementId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
      }
    } catch (error) {
      console.error('Error posting identifiants:', error)
    }
  }

  const postAllData = async () => {
    try {
      // Créer le client
      const clientResponse = await axios.post(`${URLAPI}client`, client, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const clientId = clientResponse.data.id

      // Créer le type de magasin s'il n'existe pas encore
      const typeMagasinId = await postTypeMagasin()
      if (!typeMagasinId) throw new Error('Failed to create typeMagasin')

      // Créer le magasin
      const magasinId = await postMagasin(typeMagasinId)
      if (!magasinId) throw new Error('Failed to create magasin')

      // Créer l'abonnement
      const abonnementId = await postAbonnement(magasinId)
      if (!abonnementId) throw new Error('Failed to create abonnement')

      // Créer les identifiants
      await postIdentifiants(clientId, magasinId, abonnementId)

      console.log('All data posted successfully')
      setClientID(null)
      setIdentifiants([])
      setAffichage(0)
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
            <p>Numéro de client :</p>
            <input
              type='text'
              name='numeroClient'
              value={client.numeroClient}
              onChange={handleClientChange}
            />
            <button onClick={() => setAffichage(1)}>Créer Client</button>
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
            <p>Rôle :</p>
            <select
              name='role'
              value={identifiant.role}
              onChange={handleRoleChange}
            >
              <option value='ROLE_USER'>Utilisateur</option>
              <option value='ROLE_ADMIN'>Administrateur</option>
            </select>
            <button onClick={() => setAffichage(2)}>Type de Magasin</button>
          </div>
        )
      case 2:
        return (
          <div>
            <h1>Type de Magasin</h1>
            <select name='typeMagasin'>
              {allTypeMagasin.map((item) => (
                <option value={item?.id}>{item.nom}</option>
              ))}
            </select>
            <button onClick={() => setAffichage(3)}>Nom du Magasin</button>
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
            <button onClick={() => setAffichage(4)}>
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
                    <option key={item.nom} value={item.nom}>
                      {item.nom}
                    </option>
                  ))}
                </select>
              </>
            )}
            <button onClick={postAllData}>Finaliser la Création</button>
          </div>
        )
      default:
        return <div>Option invalide</div>
    }
  }

  return <div>{renderContent()}</div>
}

export default CreationIdentifiant
