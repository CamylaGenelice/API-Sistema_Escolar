const erroServices = (error) => {
    console.log('Erro no services')
    console.log(error)
}

const erroController = (error) => {
    console.log('Erro no controller ',error)
    
}


const erroBancoDados = () => {
    console.log('Erro ao salvar os dados no banco de dados!')
}
const erro = (error,next) => {
    erroBancoDados()

}

export default {erroServices, erroController, erro, erroBancoDados}