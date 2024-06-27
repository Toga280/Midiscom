import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import usersRouter from './routes/users'
import { SetUpPortAndCore, app } from './settings/settings'
import { SetUpBD } from './database/setUpBD'

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
