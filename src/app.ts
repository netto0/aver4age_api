require('dotenv').config()
import express from 'express'
import config from 'config'
import router from './router'
import db from '../config/db'

var cors = require('cors')
const app = express()
app.use(express.json())

const port = config.get<number>("port")

app.use(cors())
app.use('/average_api/', router)
app.listen(port, async () => {
    await db()
    console.log(`Aplicação rodando na porta ${port}`)
})