import router from "./src/routes/rotas.routes.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import banco from "./src/data/banco.js"

const app = express()

dotenv.config()

app.use(cors({
    origin: process.env.VITE_URL,
    credentials: true
}))


app.use('/usuarios',router)
app.use('/disciplina',router)
app.use('/turma',router)

const porta = process.env.PORTA || 18000

app.listen(porta, () => {
    console.log('Servidor rodando')
} )