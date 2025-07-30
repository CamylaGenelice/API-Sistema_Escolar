const erroServices = (error) => {
    console.log('Erro no services')
    console.log(error)
}

const erroController = (error) => {
    console.log('Erro no controller')
    console.log(error)
}

const dadosIncompletos = () => {
    console.log('Dados incompletos!')
}

export default {erroServices, erroController, dadosIncompletos}