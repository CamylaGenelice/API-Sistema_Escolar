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

export default {validarEmail,validarNome,validarMatricula}