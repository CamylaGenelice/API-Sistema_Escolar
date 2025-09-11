import banco from "../data/banco.js"
import bcrypt from "bcrypt"


const criarAluno = async (nome, email, senha, matricula) => {

    
    try {
        const salto = 10
        const senhaHash = await bcrypt.hash(senha,salto)

        const consulta = await banco.query('INSERT INTO aluno (nome, email, senha, matricula) VALUES ($1, $2, $3, $4) RETURNING *', [nome,email,senhaHash,matricula])
        return consulta.rows[0]
    }
     catch (error) {
        console.error('Erro ao criar aluno ->', error)

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
        console.error('Erro ao criar professor ->', error)

        if (error.code === '23505'){
           
            if (error.constraint === 'professor_email_key') {
                throw new Error ('Email já cadastrado')
            }
                
            throw new Error('Dados já cadastrados')
        }
        
        throw error
    }
    
}

const pegarAluno = async (matricula) => {
    try {
        const consulta = await banco.query('SELECT id,nome, email, matricula FROM aluno WHERE matricula = $1',[matricula])
        return consulta.rows[0] || null
    }
     catch (error) {
        console.error('Erro ao buscar aluno ->', error)
        throw new Error('Erro ao buscar aluno',error)
    }
    
}
const pegarProfessor = async (email) => {
    try {
        const consulta = await banco.query('SELECT id,nome,email FROM professor WHERE email = $1 ',[email])
        return consulta.rows[0] || null
    } 
    catch (error) {
        console.error('Erro ao buscar professor ->', error)
        throw new Error('Erro ao buscar professor ')
    }
}

const atualizarEmailProfessor = async(emailNovo, emailAntigo) => {
    try {
        const consulta = await banco.query('UPDATE professor SET email = $1 WHERE email = $2 RETURNING email',[emailNovo,emailAntigo])
        return consulta.rows[0]
    }
     catch (error) {
        console.error('Erro ao atualizar email do professor ->', error)
        throw new Error('Erro ao atualizar email do professor ')
    }
}
const atualizarEmailAluno = async(emailNovo,emailAntigo) => {
    try {
        const consulta = await banco.query('UPDATE aluno SET email = $1 WHERE email = $2 RETURNING email',[emailNovo,emailAntigo])
        return consulta.rows[0]
    } 
    catch (error) {
        console.error('Erro ao atualizar email do aluno ->', error)
        throw new Error('Erro ao atualizar email do aluno ')

    }
}

const deletarAluno = async(id) => {
    try {
        const consulta = await banco.query('DELETE FROM aluno WHERE id = $1',[id])
        return consulta.rows[0]

    } 
    catch (error) {
        console.error('Erro ao deletar aluno ->', error)
        throw new Error ('Erro ao deletar aluno')
    }
}
const deletarProfessor = async (id) => {
    try {
        const consulta = await banco.query('DELETE FROM professor WHERE id = $1',[id])
        return consulta.rows[0]
    } 
    catch (error) {
        console.error('Erro ao deletar professor ->', error)
        throw new Error('Erro ao deletar aluno')
    }
}

export default {criarAluno, criarProfessor,pegarAluno, pegarProfessor,atualizarEmailAluno,atualizarEmailProfessor, deletarAluno,deletarProfessor}