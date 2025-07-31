import express from"express"
import controllerUser from "../controller/usuarios.controller.js"

const router = express.Router()
router.use(express.json())

router.post('/us',controllerUser.requisicaoCriarAluno)
router.post('/usuarios-professor',controllerUser.requisicaoCriarProfessor)
router.post('/disciplina',controllerUser.requisicaoCriarDisciplina)
router.post('/turma',controllerUser.requisicaoCriarTurma)

export default router

