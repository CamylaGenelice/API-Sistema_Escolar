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
router.get('/turma',turmaController.requisicaoPegarTurma)
router.get('/disciplins',disciplinaController.requisicaoPegarDisciplina)

router.put('/aluno/:email',controllerUser.requisicaoAtualizarEmailA)
router.put('/professor/:email',controllerUser.requisicaoAtualizarEmailP)
router.put('/turma/:codigo',turmaController.requisicaoAtualizarNomeTurma)
router.put('/disciplina/:id',disciplinaController.requisicaoAtualizarNomeDisciplina)

router.delete('/aluno',controllerUser.requisicaoDeletarA)
router.delete('/professor',controllerUser.requisicaoDeletarP)

export default router

