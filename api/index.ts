require('dotenv').config()
import express from 'express'
import config from 'config'
import db from '../config/db'
import router from '../src/router'

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