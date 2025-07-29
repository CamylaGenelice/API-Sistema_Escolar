import banco from "../data/banco.js"
import bcrypt from "bcrypt"


const criarAluno = async (nome, email, senha, matricula) => {

    const salto = 10
    const senhaHash = await bcrypt.hash(senha,salto)

    const consulta = await banco.query('INSERT INTO aluno (nome, email, senha, matricula) VALUES ($1, $2, $3, $4) RETURNING *', [nome,email,senhaHash,matricula])
    return consulta.rows[0]
}

const criarProfessor = async (nome, email, senha) => {
    const salto = 10 
    const senhaHash = await bcrypt.hash(senha,salto)

    const consulta = await banco.query('INSERT INTO professor (nome, email, senha) VALUES ($1,$2,$3) RETURNING *', [nome,email,senhaHash])

    return consulta.rows[0]
}

const criarDisciplina = async (nome, cargaHoraria) => {

    const consulta = await banco.query('INSERT INTO disciplina (nome, cargaHoraria) VALUES ($1, $2) RETURNING *', [nome,cargaHoraria])

    return (await consulta).rows[0]
}

const criarTurma = async (nome, codigoTurma, semestre) => {

    const consulta = await banco.query('INSERT INTO turma (nome, codigoTurma, semestre) VALUES ($1,$2,$3) RETURNING *', [nome, codigoTurma,semestre])

    return consulta.rows[0]
}

export default {criarAluno, criarProfessor, criarDisciplina, criarTurma}