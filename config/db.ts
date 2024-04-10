import mongoose from "mongoose";
import config from 'config'

async function connect() {
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri)
        console.log("Conectado ao DB")
    } catch(e) {
        console.log("Não foi possível conectar")
        console.log(`Erro: ${e}`)
        process.exit(1)
    }
}

export default connect