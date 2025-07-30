import router from "./src/routes/rotas.routes.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv";

const app = express()

dotenv.config()

app.use(cors())

app.use('/usuarios',router)

const porta = process.env.PORTA

app.listen(porta, () => {
    console.log('Servidor rodando')
} )