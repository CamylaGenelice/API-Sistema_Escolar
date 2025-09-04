import usuarioModelo from "../model/usuarios.model.js"
import validacoesServices from "./validacoes.services.js"


const criarAlunoS = async (nome, email, senha, matricula) => {
    try {
        
        
        if(validacoesServices.validarNome(nome) == false){
           throw error('Nome invalido') }

        if (validacoesServices.validarEmail(email) == false){
            throw error('Email invalido')}

        if (validacoesServices.validarMatricula(matricula) == false){
            throw error('Matricula invalida')}

        const aluno = await usuarioModelo.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        
        throw  new Error ('Erro ao criar aluno') 
    }
    

}

const criarProfessorS = async (nome,email,senha) => {

    try {

        if(validacoesServices.validarNome(nome) == false){
            throw error('Nome invalido') }

        if(validacoesServices.validarEmail(email) == false){
            throw error('Email invalido') }

        const professor = await usuarioModelo.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        throw  new Error ('Erro ao criar professor') 
    }
    
}

const pegarUsuarioAluno = async (matricula) => {
    try {
       
        if(validacoesServices.validarMatricula(matricula) == false){
           throw error('Matricula invalida')
        }

        const consulta = await usuarioModelo.pegarAluno(matricula)
        return consulta
    }
    catch (error) {
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
        throw new Error('Erro ao atualizar email do aluno')
    }
}
export default {criarAlunoS, criarProfessorS,pegarUsuarioAluno,pegarUsuarioProfessor,atualizarEmailProfessor,atualizarEmailAluno}