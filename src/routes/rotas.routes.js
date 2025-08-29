import express from"express"
import controllerUser from "../controller/usuarios.controller.js"
import disciplinaController from "../controller/disciplina.controller.js"
import turmaController from "../controller/turma.controller.js"

const router = express.Router()
router.use(express.json())

router.post('/alunos',controllerUser.requisicaoCriarAluno)
router.post('/usuario-professor',controllerUser.requisicaoCriarProfessor)
router.post('/disciplina',disciplinaController.requisicaoCriarDisciplina)
router.post('/turma',turmaController.requisicaoCriarTurma)

router.get('/aluno',controllerUser.requisicaoPegarAluno)
router.get('/prof',controllerUser.requisicaoPegarProfessor)

export default router

