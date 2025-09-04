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
        console.error('Erro ao criar',error)
        return res.status(500).json({message: 'Erro interno no servidor'})
        
    }
}
const requisicaoPegarDisciplina = async (req,res) => {
    try {
        const {nome} = req.body

        if (!nome) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.pegarDisciplina(nome)
        return res.status(200).json({consulta})
    } 
    catch (error) {
        console.error('Erro ao pegar disciplina',error)
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}
const requisicaoAtualizarNomeDisciplina = async (req,res) => {
    try {
        const {nomeNovo,id} = req.body
        
        if(!nomeNovo || !id ) {
            return res.status(400).json({message: 'Dados incompletos'})
        }
        const consulta = await services.atualizarNomeDisciplina(nomeNovo,id)
        return res.status(200).json({consulta})
    }
     catch (error) {
        console.error('Erro ao atualizar nome da disciplina ',error)
        return res.status(500).json({message: 'Erro interno no servidor'})
    }
}

export default {requisicaoCriarDisciplina,requisicaoPegarDisciplina,requisicaoAtualizarNomeDisciplina}