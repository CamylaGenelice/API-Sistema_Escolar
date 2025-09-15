import disciplinaModel from "../model/disciplina.model.js"
import validacoesServices from "./validacoes.services.js"


const criarDisciplina = async (nome,cargaHoraria,dia,horaInicio,horaFim) => {
    try {

        if(validacoesServices.validarNome(nome) === false) {
            throw new Error('Nome invalido')
     }  

        const disciplina = await disciplinaModel.criarDisciplina(nome,cargaHoraria,dia,horaInicio,horaFim)
        return disciplina
    } 
    catch (error) {
        
        if (error.message === 'Nome da disciplina já cadastrado'){
            throw error 
        }
        
        throw error
    }
      
}
const pegarDisciplina = async (nome) => {
    try {
         if(validacoesServices.validarNome(nome) == false){
            throw new Error ('Erro nome invalido')
         }
         const consulta = await disciplinaModel.pegarDisciplina(nome)
         return consulta
    } 
    catch (error) {
        if(error.message === 'Falha ao buscar disciplina')
        throw error
    }
} 
const atualizarNomeDisciplina = async (nomeNovo,id) => {
    try {
        if(validacoesServices.validarNome(nome) == false){
            throw new Error ('Erro nome invalido')
        }
        const consulta = await disciplinaModel.atualizarNomeDisciplina(nomeNovo,id)
        return consulta
    } 
    catch (error) {
        throw new Error('Erro ao atualizar disciplina')
    }
}

export default {criarDisciplina,pegarDisciplina,atualizarNomeDisciplina}
