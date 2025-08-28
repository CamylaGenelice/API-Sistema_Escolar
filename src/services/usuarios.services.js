import modelo from "../model/usuarios.model.js"
import middleware from "../middleware/tratamentoPadrao.js"

const validarNome = (nome) => {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/ 
    return regex.test(nome)
}
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}
const validarMatricula = (matricula) => {
    const regex = /^\d+$/
    return regex.test(matricula)
}


const criarAlunoS = async (nome, email, senha, matricula) => {
    try {
        
        
        if(validarNome(nome) == false){
           throw error('Nome invalido') }

        if (validarEmail(email) == false){
            throw error('Email invalido')}

        if (validarMatricula(matricula) == false){
            throw error('Matricula invalida')}

        const aluno = await modelo.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        
        throw error
    }
    

}

const criarProfessorS = async (nome,email,senha) => {

    try {

        if(validarNome(nome) == false){
            throw error('Nome invalido') }

        if(validarEmail(email) == false){
            throw error('Email invalido') }

        const professor = await modelo.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        middleware.erroServices(error)
    }
    
}

const criarDisciplinaS = async (nome,cargaHoraria,dia,horaInicio,horaFim) => {
    try {

        if(validarNome(nome) == false) {
        throw error('Nome invalido') }  

        

        const disciplina = await modelo.criarDisciplina(nome,cargaHoraria,dia,horaInicio,horaFim)
        return disciplina
    } 
    catch (error) {
        throw error
    }
      
}

const criarTurmaS = async (nome, codigoTurma) => {
    try {
        
        if (validarNome(nome) == false){
            console.log('Nome invalido!')
        }
        if (validarMatricula(codigoTurma) == false){
            console.log('Entrada invalida, so é permitido a entrada de números')
        }
        
        const turma = await modelo.criarTurma(nome,codigoTurma)
        return turma
    } 
    catch (error) {
        throw error
    }
    
}

const pegarUsuarioAluno = async (matricula) => {
    try {
       
        if(validarMatricula(matricula) == false){
           throw error('Matricula invalida')
        }

        const consulta = await modelo.pegarAluno(matricula)
        return consulta
    }
    catch (error) {
      throw error  
    }
}

const pegarUsuarioProfessor = async (email) => {
    try {
       
        if (validarEmail(email) == false){
            throw error('Email invalido')
        }
        const consulta = await modelo.pegarProfessor(email)
        return consulta

    } 
    catch (error) {
        throw error
    }
}

const atualizarEmailProfessor = async (emailNovo, emailAntigo) => {
    try {
        if(validarEmail(emailNovo) == false){
            throw new Error("Email invalido")
        }
        const consulta = await modelo.atualizarEmailProfessor(emailNovo,emailAntigo)
        return consulta
    }
     catch (error) {
        throw error
    }
}

export default {criarAlunoS, criarDisciplinaS, criarProfessorS, criarTurmaS, validarMatricula, validarEmail,validarNome, pegarUsuarioAluno,pegarUsuarioProfessor,atualizarEmailProfessor}