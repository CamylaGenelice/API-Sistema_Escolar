import banco from "../data/banco.js"

const criarDisciplina = async (nome, cargaHoraria,dia,horaInicio,horaFim) => {
    try {
         const consulta = await banco.query('INSERT INTO disciplina (nome,carga_horaria,dia,hora_inicio,hora_fim) VALUES ($1, $2,S3,S4,S5) RETURNING *', [nome,cargaHoraria,dia,horaInicio,horaFim])

        return consulta.rows[0]
    } catch (error) {
        if (error.code === '23505'){
            if (error.constraint === 'disciplina_nome_key'){
                 throw new Error ('Nome da disciplina já cadastrado')
            }
            throw new Error('Dados já cadastrados')   
          }
          throw error 
    }

   
}
const atualizarNomeDisciplina = async (nomeNovo, id) => {
    try {
        const consulta = await banco.query('UPDATE disciplina SET nome = $1 WHERE id = $2 RETURNING * ',[nomeNovo,id])
        return consulta.rows[0]
    }
     catch (error) {
        throw new Error ('Erro ao atualizar nome da disciplina')
    }
}
const pegarDisciplina = async (nome) => {
    try {
        const consulta = await banco.query('SELECT disciplina WHERE nome = $1',[nome])
        return consulta.rows[0]
    } 
    catch (error) {
        throw new Error ('Erro ao pegar disciplina')
    }
}


export default {atualizarNomeDisciplina,criarDisciplina,pegarDisciplina }