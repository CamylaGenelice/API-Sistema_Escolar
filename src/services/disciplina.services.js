import disciplinaModel from "../model/disciplina.model.js"
import validacoesServices from "./validacoes.services.js"

const criarDisciplinaS = async (nome,cargaHoraria,dia,horaInicio,horaFim) => {
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

export default {criarDisciplinaS}