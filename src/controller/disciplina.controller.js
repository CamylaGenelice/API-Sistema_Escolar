import services from "../services/disciplina.services.js";

const requisicaoCriarDisciplina = async (req, res) => {
    try {
        
        const {nome,carga_horaria,dia,hora_inicio,hora_fim} = req.body

        if(!nome || !carga_horaria || !dia || !hora_inicio || !hora_fim){
            //throw new Error('Ddd')
            return res.status(400).json({message: "Dados incompletos"})
        }
        
        const consulta = await services.criarDisciplina(nome,carga_horaria,dia,hora_inicio,hora_fim)
        return res.status(200).json({message: "Disciplina criada com sucesso !"})
    } 
    catch (error) {
        
        if(error.message === 'Nome invalido'){
            return res.status(409).json({msg: error.message })
        }
        if(error.message === 'Nome da disciplina já cadastrado'){
            return res.status(409).json({msg: error.message })
        }
        
        console.log('Erro ao criar',error)
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