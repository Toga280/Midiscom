import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Utilisateur() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://olfdif.midis.com:82/api/clients')
      .then((response) => {
        console.log(response.data['hydra:member'])
        setClients(response.data['hydra:member'])
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Numero Client</th>
          <th>Adresse</th>
          <th>Email</th>
          <th>identifiants</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client: any, index) => (
          <tr key={index}>
            <td>{client.nom}</td>
            <td>{client.numeroClient}</td>
            <td>{client.adresse}</td>
            <td>{client.email}</td>
            <td>{client.identifiants}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Utilisateur
