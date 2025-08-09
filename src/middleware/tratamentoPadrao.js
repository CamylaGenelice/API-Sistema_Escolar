const erroServices = (error) => {
    console.log('Erro no services',error)
    
}

const erroController = (error) => {
    console.log('Erro no controller ',error)
    
}


const erroB = (message,res) => {
    if (message == "Aluno ja esta cadastrado no banco de dados!"){
        res.status(409).json({msg: "Aluno já esta cadastrado!"})
    }
}

const erroBancoDados = (err) => {
    console.log('Erro ao salvar os dados no banco de dados!', err)

}


export default {erroServices, erroController,erroBancoDados, erroB}