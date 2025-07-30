import express from"express"
import controllerUser from "../controller/usuarios.controller.js"

const router = express.Router()

router.post('/usuarios',controllerUser.requisicaoCriarAluno)

export default router

