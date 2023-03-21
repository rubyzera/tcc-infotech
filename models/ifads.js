const mongoose = require('mongoose'); //Usando o app "Mongoose" para conectar com o banco de dados
const Schema = mongoose.Schema; //Criando a constante "Schema", para usar a função de criar banco

const ifadsSchema = new Schema({ // Criando o banco "ifads" e especificando os tipos de dados, e se cada campo é obrigatório ou não de ser preenchido
    nome: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    trabalha: {
        type: Boolean,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    datanasc : {
        type: Date,
        required:true
    },
    prontuario: {
        type: String,
        required: true
    },
    trabalhaoque: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    dificuldade: {
        type: String,
        required: false
    },
    areasinteresse: {
        type: String,
        required: true
    
    }
}, { timestamps: true });//Ao final foi usada a função "timestamps" para salvar a data de quando o banco foi feito

const ifads = mongoose.model('ifads', alunoSchema); //Salvando o modelo como "ifads"
module.exports = ifads;//Exportando para o banco na nuvem (MongoDB)