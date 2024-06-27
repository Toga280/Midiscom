const express = require('express')
const cors = require('cors')

export const app = express()

export async function SetUpPortAndCore(): Promise<void> {
  app.use(cors())
  app.use(express.json())
  app.listen(/*process.env.PORT*/ 5000, () => {
    console.log('Connexion au port', /*process.env.PORT*/ 5000, 'réussie')
  })
}
