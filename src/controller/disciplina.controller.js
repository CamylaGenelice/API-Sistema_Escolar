import services from "../services/disciplina.services";

const requisicaoCriarDisciplina = async (req, res) => {
    try {
        const {nome,cargaHoraria} = req.body
        
        const consulta = await services.criarDisciplinaS(nome,cargaHoraria)
        return res.status(200).json({msg: "Disciplina criada com sucesso !"})
    } 
    catch (error) {
        throw Error
        
    }
}

export default {requisicaoCriarDisciplina}