import express from"express"
import controllerUser from "../controller/usuarios.controller.js"

const router = express.Router()
router.use(express.json())

router.post('/alunos',controllerUser.requisicaoCriarAluno)
router.post('/usuario-professor',controllerUser.requisicaoCriarProfessor)
router.post('/disciplina',controllerUser.requisicaoCriarDisciplina)
router.post('/turma',controllerUser.requisicaoCriarTurma)

router.get('/aluno',controllerUser.requisicaoPegarAluno)
router.get('/prof',controllerUser.requisicaoPegarProfessor)

export default router

