import banco from "../data/banco.js"
import bcrypt from "bcrypt"
import middleware from "../middleware/tratamentoPadrao.js"



const usuarioCadastrado = "Aluno ja esta cadastrado no banco de dados!"

const criarAluno = async (nome, email, senha, matricula) => {

    
    try {
        const salto = 10
        const senhaHash = await bcrypt.hash(senha,salto)

        const consulta = await banco.query('INSERT INTO aluno (nome, email, senha, matricula) VALUES ($1, $2, $3, $4) RETURNING *', [nome,email,senhaHash,matricula])
        return consulta.rows[0]
    }
     catch (err) {
        
        if (err.code === '23505'){
            if (err.constraint === 'aluno_email_key')
                throw new Error ('Email já cadastrado')
            else if (err.constraint === 'aluno_matricula_key'){
                throw new Error ('Matricula já cadastrada')
            }
            throw new Error('Dados já cadastrados')
            
        }
        
        throw err
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
        if (err.code === '23505'){
           
            if (err.constraint === 'professor_email_key') {
                throw new Error ('Email já cadastrado')
            }
                
            throw new Error('Dados já cadastrados')
            
        }
        console.log('Erro ao inserir')
        throw error
    }
    
}

const criarDisciplina = async (nome, cargaHoraria) => {
    try {
         const consulta = await banco.query('INSERT INTO disciplina (nome, cargaHoraria) VALUES ($1, $2) RETURNING *', [nome,cargaHoraria])

        return consulta.rows[0]
    } catch (error) {
         middleware.erro(error);
    }

   
}

const criarTurma = async (nome, codigoTurma, semestre) => {

    try {
         const consulta = await banco.query('INSERT INTO turma (nome, codigoTurma, semestre) VALUES ($1,$2,$3) RETURNING *', [nome, codigoTurma,semestre])

        return consulta.rows[0]
    } 
    catch (error) {
        middleware.erro(error)
    }
   
}


const pegarAluno = async (matricula) => {
    try {
        const consulta = banco.query('SELECT matricula FROM aluno WHERE matricula = $1',[matricula])
        return consulta.rows[0]
    }
     catch (error) {
        throw new Error('Erro ao pegar dado',error)
    }
    
}



export default {criarAluno, criarProfessor, criarDisciplina, criarTurma, usuarioCadastrado}