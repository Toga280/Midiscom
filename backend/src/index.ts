import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import usersRouter from './routes/users'
import { SetUpPortAndCore, app } from './settings/settings'
import { SetUpBD } from './database/setUpBD'
const multer = require('multer')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API application documented with Swagger',
    },
  },
  apis: ['./src/routes/*.ts'],
}

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'uploads/') // Dossier de destination
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, `${Date.now()}-${file.originalname}`) // Nom du fichier
  },
})

const upload = multer({ storage: storage })

// Route pour l'upload de fichiers
app.post('/upload', upload.single('file'), (req: any, res: any) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }
  res.send(`File uploaded: ${req.file.filename}`)
})

const specs = swaggerJsdoc(options)

async function AllSetUp(): Promise<void> {
  await SetUpBD()
  await SetUpPortAndCore()

  app.use(express.json())
  app.get('/', (req: Request, res: Response) => {
    console.log('ici')
    res.send('Hello World!')
  })
  app.use('/users', usersRouter)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}

AllSetUp()
