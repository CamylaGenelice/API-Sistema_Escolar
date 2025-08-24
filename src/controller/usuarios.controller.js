import services from "../services/usuarios.services.js";



const requisicaoCriarAluno = async (req,res) => {
    try {
        const {nome, email, senha, matricula} = req.body

        if (!nome || !email || !senha || !matricula){
            return res.status(400).json({msg: 'Dados incompleto'})
        }
       if (services.validarMatricula(matricula) == false){
        return res.status(400).json({msg: "Matricula so aceita números positivos inteiros"})
       }
       if (services.validarEmail(email) == false ){
        return res.status(400).json({msg: "Email invalido"})
       }
       if (services.validarNome(nome) == false){
        return res.status(400).json({msg: "Nome invalido"})
       }

        const consulta = await services.criarAlunoS(nome,email,senha,matricula)
        return res.status(200).json({
            mgs: "Aluno cadastrado com sucesso!"
        })
    } 
    catch (error) {
       
        if (error.message === 'Email já cadastrado'){
            return res.status(409).json({msg: error.message })
        }
        if (error.message === 'Matricula já cadastrada'){
            return res.status(409).json({msg: error.message })
        }
        if (error.message === 'Dados já cadastrados'){
            return res.status(409).json({msg: error.message })
        }
        console.log('Erro ao criar aluno', error)
        return res.status(500).json({msg: "Erro interno no servidor"})
    }
}

const requisicaoCriarProfessor = async (req, res) => {
    try {
        const {nome,email,senha} = req.body

        if (!nome || !email || !senha){
            return res.status(400).json({msg:"Dados incompletos!"})
            
        }
        if (services.validarEmail(email) == false ){
            return res.status(400).json({msg: "Email invalido"})
       }
        if (services.validarNome(nome) == false){
            return res.status(400).json({msg: "Nome invalido"})
       }
        
        const consulta = await services.criarProfessorS(nome,email,senha)
    
        return res.status(200).json({msg: "Professor cadastrado com sucesso! "})
        
    }
     catch (error) {

       if (error.message === 'Email já cadastrado'){
        return res.status(409).json({msg: error.message})
       }
       console.log('Erro ao criar professor! ',error)
       return res.status(500).json({msg: "Erro interno no servidor!"})
    }
}

const requisicaoCriarDisciplina = async (req, res) => {
    try {
        const {nome,cargaHoraria} = req.body
        
        const consulta = await services.criarDisciplinaS(nome,cargaHoraria)
        return res.status(200).json({msg: "Disciplina criada com sucesso !"})
    } 
    catch (error) {
        throw Error
        
    }
}

const requisicaoCriarTurma = async (req,res) => {
    try {
        const {nome, codigoTurma, semestre} = req.body
        const consulta = await services.criarTurmaS(nome, codigoTurma, semestre)
        return res.status(200).json({msg: "Turma criada com sucesso !"})
    } 
    catch (error) {

        throw Error
        
    }
}
const requisicaoPegarAluno = async (req,res) => {
    try {
        const {matricula} = req.body

        const consulta = await services.pegarUsuarioAluno(matricula)
        return res.status(200).json({msg: consulta})
    } 
    catch (error) {
        if(error.message === 'Erro ao pegar dado'){
            return res.status(400).json({msg: error.message})
        }
        if (error.message === 'Dados incompletos'){
            return res.status(400).json({msg: error.message})
        }
        throw error
    }
}
const requisicaoPegarProfessor = async (req,res) => {
    try {
        const {email} = req.body

        const consulta = await services.pegarUsuarioProfessor(email)
        return res.status(200).json({msg: consulta})
    } 
    catch (error) {
        if(error.message === 'Erro ao pegar dado'){
            return res.status(400).json({msg: error.message})
        }
        throw Error
    }
}
export default {requisicaoCriarAluno, requisicaoCriarProfessor, requisicaoCriarDisciplina, requisicaoCriarTurma,requisicaoPegarAluno,requisicaoPegarProfessor}