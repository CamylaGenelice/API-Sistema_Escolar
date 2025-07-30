import services from "../services/usuarios.services.js";
import middleware from "../middleware/tratamentoPadrao.js"


const requisicaoCriarAluno = async (req,res) => {
    try {
        const {nome, email, senha, matricula} = req.body

        if (!nome || !email || !senha || !matricula){
            middleware.dadosIncompletos()
        }
        const consulta = await services.criarAlunoS(nome,email,senha,matricula)

        return res.status(200).json({
            mgs: "Aluno cadastrado com sucesso!\n",consulta
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
            middleware.dadosIncompletos()
        }

        const consulta = await services.criarProfessorS(nome,email,senha)
        return consulta
    }
     catch (error) {
       middleware.erroController(error) 
    }
}

export default {requisicaoCriarAluno, requisicaoCriarProfessor}