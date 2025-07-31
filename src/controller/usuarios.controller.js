import services from "../services/usuarios.services.js";
import middleware from "../middleware/tratamentoPadrao.js"


const requisicaoCriarAluno = async (req,res) => {
    try {
        const {nome, email, senha, matricula} = req.body

        if (!nome || !email || !senha || !matricula){
            return res.status(202).json({msg:"Dados incompletos!"})
        }
        const consulta = await services.criarAlunoS(nome,email,senha,matricula)

       if (services.validarMatricula(matricula) == false){
        return res.status(400).json({msg: "Matricula não aceita letras ou nomes"})
       }
       if (services.validarEmail(email) == false ){
        return res.status(400).json({msg: "Email invalido"})
       }
       if (services.validarNome(nome) == false){
        return res.status(400).json({msg: "Nome invalido"})
       }
        return res.status(200).json({
            mgs: "Aluno cadastrado com sucesso!"
        })
    } 
    catch (error) {
        middleware.erroController(error)
    }
}

const requisicaoCriarProfessor = async (req, res) => {
    try {
        const {nome,email,senha} = req.body

        if (!nome || !email || !senha){
            return res.status(202).json({msg:"Dados incompletos!"})
            middleware.dadosIncompletos()
        }
        
        const consulta = await services.criarProfessorS(nome,email,senha)
    
        return res.status(200).json({msg: "Professor cadastrado com sucesso! "})
        
    }
     catch (error) {
       middleware.erroController(error) 
    }
}

const requisicaoCriarDisciplina = async (req, res) => {
    try {
        const {nome,cargaHoraria} = req.body
        
        const consulta = await services.criarDisciplinaS(nome,cargaHoraria)
        return res.status(200).json({msg: "Disciplina criada com sucesso !"})
    } 
    catch (error) {
        middleware.erroController()
    }
}

const requisicaoCriarTurma = async (req,res) => {
    try {
        const {nome, codigoTurma, semestre} = req.body
        const consulta = await services.criarTurmaS(nome, codigoTurma, semestre)
        return res.status(200).json({msg: "Turma criada com sucesso !"})
    } 
    catch (error) {
        middleware.erroController()
    }
}

export default {requisicaoCriarAluno, requisicaoCriarProfessor, requisicaoCriarDisciplina, requisicaoCriarTurma}