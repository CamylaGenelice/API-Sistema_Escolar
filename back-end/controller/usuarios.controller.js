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
        console.error('Erro ao criar aluno', error)
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
       console.error('Erro ao criar professor! ',error)
       return res.status(500).json({msg: "Erro interno no servidor!"})
    }
}
const requisicaoPegarAluno = async (req,res) => {
    try {
        
        const {matricula} = req.body
        if(!matricula){
            return res.status(400).json({msg: "Dados incompletos"})
        }

        const consulta = await services.pegarUsuarioAluno(matricula)
        return res.status(200).json({msg: consulta})
    } 
    catch (error) {
        console.error('Erro ao pegar aluno ',error)
        if(error.message === 'Matricula invalida'){
             return res.status(409).json({msg: error.message})
        }
        if(error.message === 'Erro ao buscar aluno'){
            return res.status(400).json({msg: error.message})
        }
        
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoPegarProfessor = async (req,res) => {
    try {
        const {email} = req.body
        if(!email){
            return res.status(400).json({msg: "Dados incompletos"})
        }
        const consulta = await services.pegarUsuarioProfessor(email)
        return res.status(200).json({message: consulta})
    } 
    catch (error) {
        console.error('Erro ao pegar professor ',error)
        if(error.message === 'Erro ao buscar professor'){
            return res.status(400).json({message: error.message})
        }
        
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoAtualizarEmailA = async (req, res) => {
    try {
        const {emailNovo, emailAntigo} = req.body
        
        if (!emailAntigo || !emailNovo) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.atualizarEmailAluno(emailNovo,emailAntigo)
        return res.status(200).json({consulta})
    }
     catch (error) {
        console.error('Erro ao atualizar email ',error)
        if(error.message === 'Erro atualizar email do aluno'){
            return res.status(400).json({ message: error.message})
        }
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoAtualizarEmailP = async (req, res) => {
    try {
        const {emailNovo, emailAntigo} = req.body
        
        if (!emailAntigo || !emailNovo) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.atualizarEmailProfessor(emailNovo,emailAntigo)
        return res.status(200).json({consulta})
    }
     catch (error) {
        console.error('Erro ao atualizar email do professor',error)
        if(error.message === 'Erro atualizar email do professor'){
            return res.status(400).json({ message: error.message})
        }
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoDeletarA = async (req, res) => {
    try {
        const {id} = req.body

        if(!id) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.deletarAluno(id)
        return res.status(200).json({message: 'Usuario deletado com sucesso'})
    }
     catch (error) {
        console.error('Erro ao deletar aluno ',error)
        if(error.message === 'Erro ao deletar aluno'){
            return res.status(400).json({ message: error.message})
        }
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoDeletarP = async (req, res) => {
    try {
        const {id} = req.body

        if(!id) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.deletarProfessor(id)
        return res.status(200).json({message: 'Usuario deletado com sucesso'})
    }
     catch (error) {
        console.error('Erro ao deletar professor ',error)
        if(error.message === 'Erro ao deletar professor'){
            return res.status(400).json({ message: error.message})
        }
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}

export default {requisicaoCriarAluno, requisicaoCriarProfessor,requisicaoPegarAluno,requisicaoPegarProfessor,requisicaoAtualizarEmailA,requisicaoAtualizarEmailP,requisicaoDeletarA,requisicaoDeletarP}