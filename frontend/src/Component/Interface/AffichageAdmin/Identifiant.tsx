import React, { useEffect, useState } from 'react'
import './Identifiant.css'
import axios from 'axios'
import Cookies from 'js-cookie'

interface Client {
  id: number
  nom: string
  numeroClient: string
  adresse: string
  email: string
  identifiants: string[]
  magasins: string[]
}

function Identifiant() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const token = Cookies.get('token')

  useEffect(() => {
    axios
      .get('http://olfdif.midis.com:82/api/v1/clients', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('data -> ', response.data)
        setClients(response.data['hydra:member'])
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [token])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <div className='Identifiant'>
      {clients.map((client) => (
        <div key={client.id} className='Identifiant-conteneur'>
          <p>Nom: {client.nom}</p>
          <p>Numéro Client: {client.numeroClient}</p>
          <p>Email: {client.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Identifiant
