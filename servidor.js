import router from "./src/routes/rotas.routes.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import banco from "./src/data/banco.js"

const app = express()

dotenv.config()

app.use(cors())

app.use(async (req, res, next) => {
    try {
        //await banco.query("SELECT * FROM aluno"); // Testa a conexão com uma query simples
        next();
    } catch (err) {
        console.error("❌ Falha na conexão com o banco:", err.message);
        res.status(500).json({ erro: "Banco de dados offline" });
    }
});

app.use('/usuarios',router)
app.use('/disciplina',router)
app.use('/turma',router)

const porta = process.env.PORTA || 18000

app.listen(porta, () => {
    console.log('Servidor rodando')
} )