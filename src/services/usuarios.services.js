import entidadeUsuarios from "../model/usuarios.model.js"
import turmaModel from "../model/turma.model.js"
import disciplinaModel from "../model/disciplina.model.js"

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

        const aluno = await entidadeUsuarios.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        
        throw  new Error ('Erro ao criar aluno') 
    }
    

}

const criarProfessorS = async (nome,email,senha) => {

    try {

        if(validarNome(nome) == false){
            throw error('Nome invalido') }

        if(validarEmail(email) == false){
            throw error('Email invalido') }

        const professor = await entidadeUsuarios.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        throw  new Error ('Erro ao criar professor') 
    }
    
}

const criarDisciplinaS = async (nome,cargaHoraria,dia,horaInicio,horaFim) => {
    try {

        if(validarNome(nome) == false) {
        throw error('Nome invalido') }  

        

        const disciplina = await disciplinaModel.criarDisciplina(nome,cargaHoraria,dia,horaInicio,horaFim)
        return disciplina
    } 
    catch (error) {
        throw  new Error ('Erro ao criar disciplina') 
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
        
        const turma = await turmaModel.criarTurma(nome,codigoTurma)
        return turma
    } 
    catch (error) {
       throw  new Error ('Erro ao criar turma') 
    }
    
}

const pegarUsuarioAluno = async (matricula) => {
    try {
       
        if(validarMatricula(matricula) == false){
           throw error('Matricula invalida')
        }

        const consulta = await entidadeUsuarios.pegarAluno(matricula)
        return consulta
    }
    catch (error) {
      throw  new Error ('Erro ao buscar aluno') 
    }
}

const pegarUsuarioProfessor = async (email) => {
    try {
       
        if (validarEmail(email) == false){
            throw error('Email invalido')
        }
        const consulta = await entidadeUsuarios.pegarProfessor(email)
        return consulta

    } 
    catch (error) {
        throw  new Error ('Erro ao buscar professor') 
    }
}

const atualizarEmailProfessor = async (emailNovo, emailAntigo) => {
    try {
        if(validarEmail(emailNovo) == false){
            throw new Error("Email invalido")
        }
        const consulta = await entidadeUsuarios.atualizarEmailProfessor(emailNovo,emailAntigo)
        return consulta
    }
     catch (error) {
        throw new Error ('Erro ao atualizar email')
    }
}

export default {criarAlunoS, criarDisciplinaS, criarProfessorS, criarTurmaS, validarMatricula, validarEmail,validarNome, pegarUsuarioAluno,pegarUsuarioProfessor,atualizarEmailProfessor}