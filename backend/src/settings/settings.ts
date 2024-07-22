const express = require('express')
const cors = require('cors')
//const PORT = 5000
const PORT = process.env.PORT

export const app = express()

export async function SetUpPortAndCore(): Promise<void> {
  app.use(cors())
  app.use(express.json())
  app.listen(PORT, () => {
    console.log('Connexion au port', /*process.env.PORT*/ 5000, 'réussie')
  })
}
