import disciplinaModel from "../model/disciplina.model.js"
import validacoesServices from "./validacoes.services.js"


const criarDisciplina = async (nome,cargaHoraria,dia,horaInicio,horaFim) => {
    try {

        if(validacoesServices.validarNome(nome) == false) {
        throw error('Nome invalido')
     }  

        const disciplina = await disciplinaModel.criarDisciplina(nome,cargaHoraria,dia,horaInicio,horaFim)
        return disciplina
    } 
    catch (error) {
        throw  new Error ('Erro ao criar disciplina') 
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
        throw new Error('Erro ao pegar disciplina')
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
