import services from "../services/disciplina.services";

const requisicaoCriarDisciplina = async (req, res) => {
    try {
        if(!nome || !cargaHoraria || !dia || !horaInicio || !horaFim){
            return res.status(400).json({message: "Dados incompletos"})
        }
        const {nome,cargaHoraria,dia,horaInicio,horaFim} = req.body
        
        const consulta = await services.criarDisciplinaS(nome,cargaHoraria,dia,horaInicio,horaFim)
        return res.status(200).json({message: "Disciplina criada com sucesso !"})
    } 
    catch (error) {
        throw new Error ('Erro ao criar disciplina')
        return res.status(500).json({message: 'Erro interno no servidor'})
        
    }
}


export default {requisicaoCriarDisciplina}