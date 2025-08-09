const erroServices = (error) => {
    console.log('Erro no services',error)
    
}

const erroController = (error) => {
    console.log('Erro no controller ',error)
    
}
const erroB = (message) => {
    if (message === "Error: error: duplicar valor da chave viola a restrição de unicidade aluno_email_key "){
        console.log('')
    }
}

const erroBancoDados = () => {
    console.log('Erro ao salvar os dados no banco de dados!')
}
const erro = (error) => {
    erroBancoDados()

}

export default {erroServices, erroController, erro, erroBancoDados, erroB}