import turmaModel from "../model/turma.model.js"
import validacoesServices from "./validacoes.services.js"


const criarTurmaS = async (nome, codigoTurma) => {
    try {
        
        if (validacoesServices.validarNome(nome) == false){
            console.log('Nome invalido!')
        }
        if (validacoesServices.validarMatricula(codigoTurma) == false){
            console.log('Entrada invalida, so é permitido a entrada de números')
        }
        
        const turma = await turmaModel.criarTurma(nome,codigoTurma)
        return turma
    } 
    catch (error) {
       throw  new Error ('Erro ao criar turma') 
    }
    
}

export default {criarTurmaS}