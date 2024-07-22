const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000

export const app = express()

export async function SetUpPortAndCore(): Promise<void> {
  app.use(
    cors({
      origin: 'http://localhost:3000', // Autorise uniquement cette origine
    })
  )
  app.use(express.json())
  app.listen(PORT, () => {
    console.log('Connexion au port', PORT, 'réussie')
  })
}
