const mongoose = require('mongoose'); //Usando o app "Mongoose" para conectar com o banco de dados
const Schema = mongoose.Schema; //Criando a constante "Schema", para usar a função de criar banco

const pessoastiSchema = new Schema({ // Criando o banco "pessoasti" e especificando os tipos de dados, e se cada campo é obrigatório ou não de ser preenchido
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
    datanasc : {
        type: Date,
        required: true
    },
    formacaoti: {
        type: Boolean,
        required: true
    },
    formacaotrue: {
        type: String,
        required: false
    },
    formacaofalse: {
        type: String,
        required: false
    },
    areaetempo: {
        type: String,
        required: true
    },
    resumotrabalho: {
        type: String,
        required: true
    }
}, { timestamps: true });//Ao final foi usada a função "timestamps" para salvar a data de quando o banco foi feito

const pessoasti = mongoose.model('pessoasti', pessoastiSchema); //Salvando o modelo como "pessoasti"
module.exports = pessoasti;//Exportando para o banco na nuvem (MongoDB)