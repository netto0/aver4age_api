import express from 'express'
import config from 'config'
import router from './router'

const app = express()
app.use(express.json())

const port = config.get<number>("port")

app.use('/average_api/', router)

app.listen(port, async () => {
    console.log(`Aplicação rodando na porta ${port}`)
})