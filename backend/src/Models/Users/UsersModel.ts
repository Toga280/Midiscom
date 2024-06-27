import { connection } from '../../database/configBD'
import { ModelController } from '../../settings/Interface'

export async function getAllUsers(): Promise<ModelController> {
  try {
    const [users] = await connection.promise().query('SELECT * FROM users')
    return {
      status: 200,
      message: 'recuperation de tout les utilisateurs réussie',
      data: users,
    }
  } catch (error) {
    console.error('Erreur MySQL getAllUsers : ', error)
    return { status: 500, message: 'Erreur serveur' }
  }
}

export async function loginUsers(
  id: number,
  mdp: string
): Promise<ModelController> {
  try {
    const query = 'SELECT * FROM users WHERE id = ? and mdp = ?'
    const [rows] = await connection.query(query, [id, mdp])

    if (rows.length === 1) {
      return { status: 200, message: 'Connexion réussie' }
    } else {
      return { status: 401, message: 'Identifiant ou mot de passe incorrect' }
    }
  } catch (error) {
    console.error('Erreur MySQL loginUsers : ', error)
    return { status: 500, message: 'Erreur serveur' }
  }
}
