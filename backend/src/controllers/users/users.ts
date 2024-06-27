import { Request, Response } from 'express'
import { getAllUsers } from '../../Models/Users/UsersModel'
import { ModelController } from '../../settings/Interface'

export async function GetAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users: ModelController = await getAllUsers()
    res.status(users.status).json({
      message: users.message,
      data: users.data,
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs : ', error)
    res.status(500).json({
      message:
        "Une erreur interne s'est produite lors de la récupération des utilisateurs.",
    })
  }
}

export async function LoginUsers(
  req: Request,
  res: Response
): Promise<void | any> {
  try {
    const { id, mdp } = req.body
    if (!id || !mdp) {
      return res.status(400).json({
        message:
          'Requête invalide. Toutes les informations requise ne sont pas fournies.',
      })
    }
  } catch (error) {
    console.error('Erreur lors de la de connection au compte : ', error)
    res.status(500).json({
      message:
        "Une erreur interne s'est produite lors de la de connection au compte.",
    })
  }
}
