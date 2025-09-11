import services from "../services/turma.services.js";

const requisicaoCriarTurma = async (req,res) => {
    try {
        const {nome, codigoTurma} = req.body

        if (!nome || !codigoTurma){
            return res.status(400).json({message: "Dados incompletos"})
        }
        const consulta = await services.criarTurmaS(nome, codigoTurma)
        return res.status(200).json({message: "Turma criada com sucesso !"})
    } 
    catch (error) {
        
        console.error('Erro ao criar turma ',error)
        return res.status(500).json({message: "Erro interno no servidor"})
        
    }
}

const requisicaoPegarTurma = async (req, res) => {
    try {
        const {codigoTurma} = req.body

        if(!codigoTurma) {
            return res.status(400).json({message: "Dados incompletos!"})
        }
        const consulta = await services.pegarTurma(codigoTurma)
        return res.status(200).json({consulta})
    }
     catch (error) {
        console.error('Erro ao buscar turma ',error)
        return res.status(500).json({message: "Erro interno no servidor"})
    }
}
const requisicaoAtualizarNomeTurma = async (req, res) => {
    try {
        const {nome, id} = req.body

        if (!nome || !id) {
            return res.status(400).json({message: "Dados incompletos"})
        }
        const consulta = await services.atualizarNomeTurma(nome,id)
        return res.status(200).json({consulta})
    } 
    catch (error) {
        console.error('Erro ao atualizar nome ',error)
        return res.status(500).json({message: "Erro interno no servidor"})
    }
}
export default {requisicaoCriarTurma, requisicaoAtualizarNomeTurma, requisicaoPegarTurma}