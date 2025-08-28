import banco from "../data/banco.js"
import bcrypt from "bcrypt"
import middleware from "../middleware/tratamentoPadrao.js"




const criarAluno = async (nome, email, senha, matricula) => {

    
    try {
        const salto = 10
        const senhaHash = await bcrypt.hash(senha,salto)

        const consulta = await banco.query('INSERT INTO aluno (nome, email, senha, matricula) VALUES ($1, $2, $3, $4) RETURNING *', [nome,email,senhaHash,matricula])
        return consulta.rows[0]
    }
     catch (error) {
        
        if (error.code === '23505'){
            if (error.constraint === 'aluno_email_key'){
                throw new Error ('Email já cadastrado')
            }
                
            else if (error.constraint === 'aluno_matricula_key'){
                throw new Error ('Matricula já cadastrada')
            }
            throw new Error('Dados já cadastrados')
            
        }
        
        throw error
    }
    
    
}

const criarProfessor = async (nome, email, senha) => {
    try {
        const salto = 10 
        const senhaHash = await bcrypt.hash(senha,salto)

        const consulta = await banco.query('INSERT INTO professor (nome, email, senha) VALUES ($1,$2,$3) RETURNING *', [nome,email,senhaHash])

        return consulta.rows[0]
    } 
    catch (error) {
        if (error.code === '23505'){
           
            if (error.constraint === 'professor_email_key') {
                throw new Error ('Email já cadastrado')
            }
                
            throw new Error('Dados já cadastrados')
        }
        
        throw error
    }
    
}

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


const pegarAluno = async (matricula) => {
    try {
        const consulta = await banco.query('SELECT id,nome, email, matricula FROM aluno WHERE matricula = $1',[matricula])
        return consulta.rows[0] || null
    }
     catch (error) {
        throw new Error('Erro ao pegar dado',error)
    }
    
}
const pegarProfessor = async (email) => {
    try {
        const consulta = await banco.query('SELECT id,nome,email FROM professor WHERE email = $1 ',[email])
        return consulta.rows[0] || null
    } 
    catch (error) {
        throw new Error('Erro ao pegar dado ',error)
    }
}

const atualizarEmailProfessor = async(emailNovo, emailAntigo) => {
    try {
        const consulta = await banco.query('UPDATE professor SET email = $1 WHERE email = $2 RETURNING email',[emailNovo,emailAntigo])
        return consulta.rows[0]
    }
     catch (error) {
        throw new Error('Erro ao atualizar email do professor ',error)
    }
}
const atualizarEmailAluno = async(emailNovo,emailAntigo) => {
    try {
        const consulta = await banco.query('UPDATE aluno SET email = $1 WHERE email = $2 RETURNING email',[emailNovo,emailAntigo])
        return consulta.rows[0]
    } 
    catch (error) {
        throw new Error('Erro ao atualizar email do aluno ',error)

    }
}
const atualizarNomeDisciplina = async (nomeNovo, id) => {
    try {
        const consulta = await banco.query('UPDATE disciplina SET nome = $1 WHERE id = $2 RETURNING * ',[nomeNovo,id])
        return consulta.rows[0]
    }
     catch (error) {
        throw new Error ('Erro ao atualizar nome da disciplina',error)
    }
}
//const atualizarHorarioDisciplina = async ()
export default {criarAluno, criarProfessor, criarDisciplina, criarTurma, pegarAluno, pegarProfessor,atualizarEmailAluno,atualizarEmailProfessor,atualizarNomeDisciplina}