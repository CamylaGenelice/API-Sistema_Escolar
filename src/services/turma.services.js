import turmaModel from "../model/turma.model.js"
import validacoesServices from "./validacoes.services.js"


const criarTurmaS = async (nome, codigoTurma) => {
    try {
        
        if (validacoesServices.validarNome(nome) == false){
            throw new Error('Nome invalido!')
        }
        if (validacoesServices.validarMatricula(codigoTurma) == false){
            throw new Error('Entrada invalida, so é permitido a entrada de números')
        }
        
        const turma = await turmaModel.criarTurma(nome,codigoTurma)
        return turma
    } 
    catch (error) {
       throw new Error ('Erro ao criar turma') 
    }
    
}
const pegarTurma = async (codigoTurma) => {
    try {
        const consulta = await turmaModel.pegarTurma(codigoTurma)
        return consulta
    } 
    catch (error) {
        throw new Error ('Erro ao buscar turma ')
    }
}
const atualizarNomeTurma = async (nome, id) => {
    try {
        if(validacoesServices.validarNome(nome) == false){
            throw new Error ('Nome invalido')
        }
        const consulta = await turmaModel.atualizarNomeTurma(nome,id)
        return consulta
    } 
    catch (error) {
        throw new Error('Erro ao atualizar o nome da turma')
    }
}
export default {criarTurmaS,pegarTurma,atualizarNomeTurma}