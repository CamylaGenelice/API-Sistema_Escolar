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
            console.log('Erro: Nome invalido!') }

        if (validarEmail(email) == false){
            console.log('Erro: Email invalido!')}

        if (validarMatricula(matricula) == false){
            console.log('Erro: Matricula não aceita letras ou nomes')}

        const aluno = await modelo.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        
        throw error
    }
    

}

const criarProfessorS = async (nome,email,senha) => {

    try {

        if (!nome || !email || !senha){
        console.log('Dados incompletos!') }

        if(validarNome(nome) == false){
        console.log('Erro: Nome invalido!') }

        if(validarEmail(email) == false){
        console.log('Erro: Email invalido!') }

        const professor = await modelo.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        middleware.erroServices(error)
    }
    
}

const criarDisciplinaS = async (nome,cargaHoraria) => {
    try {
        if (!nome || !cargaHoraria){
        console.log('Dados incompletos!') }

        if(validarNome(nome) == false) {
        console.log('Nome invalido') }  

        const disciplina = await modelo.criarDisciplina(nome,cargaHoraria)
        return disciplina
    } 
    catch (error) {
        middleware.erroServices(error)
    }
      
}

const criarTurmaS = async (nome, codigoTurma, semestre) => {
    try {
        if (!nome || !codigoTurma || !semestre){
        console.log('Dados incompletos!')
        }
        if (validarNome(nome) == false){
            console.log('Nome invalido!')
        }
        if (validarMatricula(codigoTurma) == false){
            console.log('Entrada invalida, so é permitido a entrada de números')
        }
        
        const turma = await modelo.criarTurma(nome,codigoTurma,semestre)
        return turma
    } 
    catch (error) {
        middleware.erroServices(error)
    }
    
}

const pegarUsuarioAluno = async (matricula) => {
    try {
        if (!matricula){
        console.log('Dados incompletos') 
    }
        if(validarMatricula(matricula) == false){
            console.log('Matricula incorreta')
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
       
        if (!email){
            console.log('Dados incompletos!')
        }
        if (validarEmail(email) == false){
            console.log('Email incorreto')
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
        
    } catch (error) {
        
    }
}

export default {criarAlunoS, criarDisciplinaS, criarProfessorS, criarTurmaS, validarMatricula, validarEmail,validarNome, pegarUsuarioAluno,pegarUsuarioProfessor}