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

function Utilisateur() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [rows, setRows] = useState<Row[]>([{ id: 1, value: '' }])

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

  const deleteClient = (id: number) => {
    console.log('id -> ', id)
    axios
      .delete(`http://olfdif.midis.com:82/api/clients/${id}`)
      .then((response) => {
        console.log('delete response -> ', response.data)
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
          <th>Identifiants</th>
          <th>Modifier</th>
          <th>Supprimer</th>
          <th>Ajouter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input></input>
          </td>
          <td>
            <input></input>
          </td>
          <td>
            <input></input>
          </td>
          <td>
            <input></input>
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
            <FontAwesomeIcon icon={faPlus} />
          </td>
        </tr>
        {clients.map((client: any, index) => (
          <tr key={index}>
            <td>{client.nom}</td>
            <td>{client.numeroClient}</td>
            <td>{client.adresse}</td>
            <td>{client.email}</td>
            <td>{client.identifiants}</td>
            <td>
              <FontAwesomeIcon icon={faPenToSquare} />
            </td>
            <td>
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => deleteClient(client.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Utilisateur
