import modelo from "../model/usuarios.model.js"

const validarNome = (nome) => {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/ 
    return regex.test(nome)
}
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}
const validarMatricula = (matricula) => {
    const regex = /^\d+$/
    return regex.test(matricula)
}

const criarAlunoS = async (nome, email, senha, matricula) => {
    try {
        
        if (!nome || !email || !senha || !matricula){
        console.log('Dados incompletos!') }
        
        if(validarNome(nome) == false){
            console.log('Erro: Nome invalido!') }

        if (validarEmail(email) == false){
            console.log('Erro: Email invalido!')}

        if (validarMatricula(matricula) == false){
            console,log('Erro: Matricula não aceita letras ou nomes')}

        const aluno = modelo.criarAluno(nome,email,senha,matricula)
        return aluno
    }
     catch (error) {
        console.log('Erro no service de usuarios')
        console.log(error)
    }
    

}

const criarProfessorS = (nome,email,senha) => {

    try {

        if (!nome || !email || !senha){
        console.log('Dados incompletos!') }

        if(validarNome(nome) == false){
        console.log('Erro: Nome invalido!') }

        if(validarEmail(email) == false){
        console.log('Erro: Email invalido!') }

        const professor = modelo.criarProfessor(nome,email,senha)
        return professor
    
} 
    catch (error) {
        console.log('Erro no service de usuarios')
        console.log(error)
    }
    
}

const criarDisciplinaS = (nome,cargaHoraria) => {

    if (!nome || !cargaHoraria){
        console.log('Dados incompletos!') }

    if(validarNome(nome) == false) {
        console.log('Nome invalido')
    }    
}