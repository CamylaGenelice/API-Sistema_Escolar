import services from "../services/turma.services";

const requisicaoCriarTurma = async (req,res) => {
    try {
        const {nome, codigoTurma, semestre} = req.body
        const consulta = await services.criarTurmaS(nome, codigoTurma, semestre)
        return res.status(200).json({msg: "Turma criada com sucesso !"})
    } 
    catch (error) {

        throw Error
        
    }
}