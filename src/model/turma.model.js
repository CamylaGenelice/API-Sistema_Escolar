import banco from "../data/banco.js"

const criarTurma = async (nome, codigoTurma) => {

    try {
         const consulta = await banco.query('INSERT INTO turma (nome, codigo) VALUES ($1,$2) RETURNING *', [nome, codigoTurma])

         return consulta.rows[0]
    } 
    catch (error) {
         if (error.code === '23505'){
            if (error.constraint === 'turma_codigo_key'){
                 throw new Error ('Codigo da turma já cadastrado')
            }
            throw new Error('Dados já cadastrados')   
          } 
}
   
}

const atualizarNomeTurma = async (nomeNovo, id) => {
    try {
        const consulta = await banco.query('UPDATE turma SET nome = $1 WHERE id = $2 RETURNING *',[nomeNovo,id])
        return consulta.rows[0]

    } catch (error) {
        throw new Error ('Erro ao atualizar nome da turma')
    }
}
const pegarTurma = async (codigoTurma) => {
    try {
        const consulta = await banco.query('SELECT turma WHERE codigo_turma = $1',[codigoTurma])
        return consulta.rows[0]
    } 
    catch (error) {
        throw new Error ('Erro ao pegar turma')
    }
}

export default {atualizarNomeTurma,criarTurma,pegarTurma}