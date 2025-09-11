const erroServices = (error) => {
    console.log('Erro no services',error)
    
}

const erroController = (error) => {
    console.log('',error)
    
}


const erroB = () => {
    console.log('Nome da disciplina já cadastrado')
}

const erroBancoDados = (err) => {
    
    console.log('Erro ao salvar os dados no banco de dados!', err)

}


export default {erroServices, erroController,erroBancoDados, erroB}