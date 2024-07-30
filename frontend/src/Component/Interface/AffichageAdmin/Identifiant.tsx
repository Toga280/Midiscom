import React, { useEffect, useState } from 'react'
import './Identifiant.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { URLAPI } from '../../../Setting'
import CreationIdentifiant from './CreationIdentifiant'

interface Client {
  id: number
  nom: string
  numeroClient: string
  adresse: string
  email: string
  identifiants: string[]
  magasins: string[]
  nomMagasin?: string
}

interface Magasin {
  id: number
  client: string
  typeMagasin: string
  nom: string
}

interface TypeMagasin {
  id: number
  nom: string
  magasins: string[]
}

const clientNull: Client = {
  id: -1,
  nom: '',
  numeroClient: '',
  adresse: '',
  email: '',
  identifiants: [],
  magasins: [],
}

function Identifiant() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPart, setSelectedPart] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [selectedMagasin, setSelectedMagasin] = useState<Magasin | null>(null)
  const [allTypeMagasins, setAllTypeMagasins] = useState<TypeMagasin[] | null>(
    null,
  )
  const [creation, setCreation] = useState<boolean>(false)
  const token = Cookies.get('token')

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client)
    if (client.magasins.length > 0) {
      getMagasin(getIdFromUrl(client.magasins[0]))
    }
    getAllTypeMagasins()
    setSelectedPart(true)
  }

  const handleUnselectedClient = () => {
    setSelectedClient(clientNull)
    setSelectedPart(false)
  }

  const getIdFromUrl = (url: string) => {
    const parts: string[] = url.split('/')
    return parts[parts.length - 1]
  }

  const getMagasin = async (id: string | number) => {
    try {
      const response = await axios.get(`${URLAPI}magasin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setSelectedMagasin(response.data['hydra:member'][0])
    } catch (error) {
      handleError('Erreur lors du getMagasin', error)
    }
  }

  const getAllTypeMagasins = async () => {
    try {
      const response = await axios.get(`${URLAPI}typeMagasins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setAllTypeMagasins(response.data['hydra:member'])
    } catch (error) {
      handleError('Erreur lors du getAllTypeMagasins', error)
    }
  }

  const handleError = (message: string, error: unknown) => {
    if (error instanceof Error) {
      setError(`${message} : ${error.message}`)
    } else {
      setError(`${message} : une erreur inconnue s'est produite`)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsResponse = await axios.get(`${URLAPI}clients`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const magasinsResponse = await axios.get(`${URLAPI}magasins`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const clientsData = clientsResponse.data['hydra:member']
        const magasinsData = magasinsResponse.data['hydra:member']

        const clientsWithMagasinNames = clientsData.map((client: Client) => {
          const magasinUrl = client.magasins[0]
          const magasinId = getIdFromUrl(magasinUrl)
          const magasin = magasinsData.find(
            (m: Magasin) => m.id === parseInt(magasinId),
          )
          return {
            ...client,
            nomMagasin: magasin ? magasin.nom : 'Aucun magasin associé',
          }
        })

        setClients(clientsWithMagasinNames)
        setLoading(false)
      } catch (error) {
        handleError('Erreur lors du fetch des données', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [token])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <div>
      {!selectedPart ? (
        <div>
          {!creation ? (
            <div className='Identifiant'>
              <div
                className='Identifiant-conteneur'
                onClick={() => setCreation(true)}
              >
                <div className='icon-container'>
                  <FontAwesomeIcon icon={faPlus} size='2x' />
                </div>
              </div>

              {clients.map((client) => (
                <div
                  key={client.id}
                  className='Identifiant-conteneur'
                  onClick={() => handleSelectClient(client)}
                >
                  <p>Nom du magasin: {client.nomMagasin}</p>
                  <p>Numéro Client: {client.numeroClient}</p>
                  <p>Email: {client.email}</p>
                </div>
              ))}
            </div>
          ) : (
            <CreationIdentifiant />
          )}
        </div>
      ) : (
        <div>
          <p onClick={handleUnselectedClient} style={{ cursor: 'pointer' }}>
            Retour
          </p>
          <div>
            <p>Enseigne: x</p>
            <p>Centrale: x</p>
            <p>Pack: x</p>
            <p>Exception: x</p>
            <p>Musique: x</p>
            <p>Type magasin: x</p>
            <p>Raison sociale: x</p>
            <p>Nom magasin: {selectedMagasin?.nom}</p>
            <p>Numéro abonné: {selectedClient?.numeroClient}</p>
            <p>Date abonnement: x</p>
            <p>Solde abonnement Express: x</p>
            <p>Solde abonnement Express à renouveler: x</p>
            <p>Solde carnet Express: x</p>
            <p>Solde abonnement campagne: x</p>
            <p>Solde abonnement campagne à renouveler: x</p>
            <p>Email: {selectedClient?.email}</p>
            <p>Compte serveur: x</p>
            <p>Identifiant: x</p>
            <p>Mot de passe: {selectedClient?.numeroClient}</p>
            <p>TypeMagasins:</p>
            <div>
              {allTypeMagasins?.map((TypeMagasins) => (
                <div
                  key={TypeMagasins.id}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <p>{TypeMagasins.nom}</p>
                  <input type='checkbox' />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Identifiant
