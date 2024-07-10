import {
  faMinus,
  faPenToSquare,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Utilisateur.css'

interface Row {
  id: number
  value: string
}

interface Client {
  id: number
  nom: string
  numeroClient: string
  adresse: string
  email: string
  identifiants: string[]
}

function Utilisateur() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [rows, setRows] = useState<Row[]>([{ id: 1, value: '' }])
  const [newClientNom, setNewClientNom] = useState<string>('')
  const [newClientAdresse, setNewClientAdresse] = useState<string>('')
  const [newClientNumClient, setNewClientNumClient] = useState<string>('')
  const [newClientEmail, setNewClientEmail] = useState<string>('')

  const [editClientId, setEditClientId] = useState<number | null>(null)
  const [editClientData, setEditClientData] = useState<Partial<Client>>({
    nom: '',
    numeroClient: '',
    adresse: '',
    email: '',
    identifiants: [],
  })

  const addRow = () => {
    const newId = rows.length + 1
    setRows([...rows, { id: newId, value: '' }])
  }

  const handleInputChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, value: event.target.value } : row,
    )
    setRows(newRows)
  }

  const handleChangeNom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewClientNom(event.target.value)
  }

  const handleChangeAdresse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewClientAdresse(event.target.value)
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewClientEmail(event.target.value)
  }

  const handleChangeNumClient = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewClientNumClient(event.target.value)
  }

  const handleEditChange = (
    field: keyof Client,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEditClientData({ ...editClientData, [field]: event.target.value })
  }

  const startEdit = (client: Client) => {
    setEditClientId(client.id)
    setEditClientData({
      nom: client.nom,
      numeroClient: client.numeroClient,
      adresse: client.adresse,
      email: client.email,
      identifiants: client.identifiants,
    })
  }

  const saveEdit = (id: number) => {
    console.log('editClientData -> ', editClientData)
    axios
      .patch(`http://olfdif.midis.com:82/api/clients/${id}`, editClientData, {
        headers: {
          'Content-Type': 'application/ld+json',
        },
      })
      .then((response) => {
        console.log('patch -> ', response.data)
        setClients(
          clients.map((client) => (client.id === id ? response.data : client)),
        )
        setEditClientId(null)
      })
      .catch((error) => {
        console.error('Erreur:', error)
      })
  }

  const cancelEdit = () => {
    setEditClientId(null)
  }

  const createClient = () => {
    axios
      .post(
        'http://olfdif.midis.com:82/api/clients',
        {
          nom: newClientNom,
          adresse: newClientAdresse,
          email: newClientEmail,
          numeroClient: newClientNumClient,
          identifiants: [''],
          emailcommercial: 'teste@qsfdq',
        },
        {
          headers: {
            'Content-Type': 'application/ld+json',
          },
        },
      )
      .then((response) => {
        setClients([...clients, response.data])
      })
      .catch((error) => {
        console.error('Erreur:', error)
      })
  }

  const deleteClient = (id: number) => {
    axios
      .delete(`http://olfdif.midis.com:82/api/clients/${id}`)
      .then(() => {
        setClients(clients.filter((client) => client.id !== id))
      })
      .catch((error) => {
        console.error('Erreur:', error)
      })
  }

  useEffect(() => {
    axios
      .get('http://olfdif.midis.com:82/api/clients')
      .then((response) => {
        console.log(response.data['hydra:member'])
        setClients(response.data['hydra:member'])
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
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
          <th>Identifiants</th>
          <th>Modifier</th>
          <th>Supprimer</th>
          <th>Ajouter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input value={newClientNom} onChange={handleChangeNom}></input>
          </td>
          <td>
            <input
              value={newClientAdresse}
              onChange={handleChangeAdresse}
            ></input>
          </td>
          <td>
            <input value={newClientEmail} onChange={handleChangeEmail}></input>
          </td>
          <td>
            <input
              value={newClientNumClient}
              onChange={handleChangeNumClient}
            ></input>
          </td>
          <td>
            {rows.map((entry) => (
              <div key={entry.id} style={{ marginBottom: '10px' }}>
                <input
                  type='text'
                  value={entry.value}
                  onChange={(event) => handleInputChange(entry.id, event)}
                  style={{ marginRight: '10px' }}
                />
                {entry.id === rows[rows.length - 1].id && (
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={addRow}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </div>
            ))}
          </td>
          <td></td>
          <td></td>
          <td>
            <FontAwesomeIcon icon={faPlus} onClick={createClient} />
          </td>
        </tr>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>
              {editClientId === client.id ? (
                <input
                  type='text'
                  value={editClientData.nom}
                  onChange={(event) => handleEditChange('nom', event)}
                />
              ) : (
                client.nom
              )}
            </td>
            <td>
              {editClientId === client.id ? (
                <input
                  type='text'
                  value={editClientData.numeroClient}
                  onChange={(event) => handleEditChange('numeroClient', event)}
                />
              ) : (
                client.numeroClient
              )}
            </td>
            <td>
              {editClientId === client.id ? (
                <input
                  type='text'
                  value={editClientData.adresse}
                  onChange={(event) => handleEditChange('adresse', event)}
                />
              ) : (
                client.adresse
              )}
            </td>
            <td>
              {editClientId === client.id ? (
                <input
                  type='text'
                  value={editClientData.email}
                  onChange={(event) => handleEditChange('email', event)}
                />
              ) : (
                client.email
              )}
            </td>
            <td>
              {editClientId === client.id ? (
                <input
                  type='text'
                  value={editClientData.identifiants}
                  onChange={(event) => handleEditChange('identifiants', event)}
                />
              ) : (
                client.identifiants
              )}
            </td>
            <td>
              {editClientId === client.id ? (
                <>
                  <button onClick={() => saveEdit(client.id)}>
                    Enregistrer
                  </button>
                  <button onClick={cancelEdit}>Annuler</button>
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => startEdit(client)}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </td>
            <td>
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => deleteClient(client.id)}
                style={{ cursor: 'pointer' }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Utilisateur
