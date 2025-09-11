import usuarioModelo from "../model/usuarios.model.js"
import validacoesServices from "./validacoes.services.js"


const criarAlunoS = async (nome, email, senha, matricula) => {
    try {
        
        
        if(validacoesServices.validarNome(nome) == false){
           throw new Error('Nome invalido') }

        if (validacoesServices.validarEmail(email) == false){
            throw new Error('Email invalido')}

        if (validacoesServices.validarMatricula(matricula) == false){
            throw new Error('Matricula invalida')}

        const aluno = await usuarioModelo.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        if(error.message === 'Email já cadastrado' || error.message === 'Matricula já cadastrada' ||error.message === 'Dados já cadastrados' ){
            throw error
        }
        
        throw  new Error ('Erro ao criar aluno') 
    }
    

}

const criarProfessorS = async (nome,email,senha) => {

    try {

        if(validacoesServices.validarNome(nome) == false){
            throw new Error('Nome invalido') }

        if(validacoesServices.validarEmail(email) == false){
            throw new Error('Email invalido') }

        const professor = await usuarioModelo.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        if(error.message === 'Email já cadastrado' || error.message === 'Dados já cadastrados'){
            throw error
        }

        throw  new Error ('Erro ao criar professor') 
    }
    
}

const pegarUsuarioAluno = async (matricula) => {
    try {
       
        if(validacoesServices.validarMatricula(matricula) == false){
           throw new Error('Matricula invalida')
        }

        const consulta = await usuarioModelo.pegarAluno(matricula)
        return consulta
    }
    catch (error) {
        if(error.message ==='Erro ao buscar aluno'){
            throw error
        }
      throw  new Error ('Erro ao buscar aluno') 
    }
}

const pegarUsuarioProfessor = async (email) => {
    try {
       
        if (validacoesServices.validarEmail(email) == false){
            throw error('Email invalido')
        }
        const consulta = await usuarioModelo.pegarProfessor(email)
        return consulta

    } 
    catch (error) {
        if(error.message ==='Erro ao buscar professor'){
            throw error
        }
        throw  new Error ('Erro ao buscar professor') 
    }
}

const atualizarEmailProfessor = async (emailNovo, emailAntigo) => {
    try {
        if(validacoesServices.validarEmail(emailNovo) == false){
            throw new Error("Email invalido")
        }
        const consulta = await usuarioModelo.atualizarEmailProfessor(emailNovo,emailAntigo)
        return consulta
    }
     catch (error) {
        if(error.message ==='Erro ao atualizar email do professor'){
            throw error
        }
        throw new Error ('Erro ao atualizar email')
    }
}
const atualizarEmailAluno = async (emailNovo, emailAntigo) => {
    try {
        if(validacoesServices.validarEmail(emailNovo)  == false || validacoesServices.validarEmail(emailAntigo) == false){
            throw new Error('Email invalido')
        }
        const consulta = await usuarioModelo.atualizarEmailAluno(emailNovo, emailAntigo)
        return consulta
    } 
    catch (error) {
        if(error.message ==='Erro ao atualizar email do aluno'){
            throw error
        }
        throw new Error('Erro ao atualizar email do aluno')
    }
}

const deletarAluno = async (id) => {
    try {
        const consulta = await usuarioModelo.deletarAluno(id)
        return consulta
    }
     catch (error) {
        if(error.message ==='Erro ao deletar aluno'){
            throw error
        }
        throw new Error('Erro ao deletar aluno')
    }
}
const deletarProfessor = async (id) => {
    try {
        const consulta = await usuarioModelo.deletarProfessor(id)
        return consulta
    }
     catch (error) {
        if(error.message ==='Erro ao deletar professor'){
            throw error
        }
        throw new Error('Erro ao deletar professor')
    }
}
export default {criarAlunoS, criarProfessorS,pegarUsuarioAluno,pegarUsuarioProfessor,atualizarEmailProfessor,atualizarEmailAluno,deletarAluno,deletarProfessor}