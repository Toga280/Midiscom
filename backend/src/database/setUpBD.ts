import * as fs from 'fs'
import { connection } from './configBD'

export async function SetUpBD(): Promise<void> {
  try {
    await createLogin
  } catch (error) {
    console.error(
      'Erreur lors de la création du script de génération MySQL --> ',
      error
    )
  }
}

async function createLogin(): Promise<void> {
  console.log('ici')
  connection.query(
    `CREATE TABLIE IF NOT EXISTS login (
        id int(12) NOT NULL,
        mdp varchar(50) COLLATE latin1_bin,
        PRIMARY KEY (id)) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_bin`,
    async (err: any, result: any) => {
      if (err) {
        console.error('Erreur lors de la création de la table login : ', err)
        return
      }
      console.log('Table login vérifiée ou créée avec succès !')
    }
  )
}
