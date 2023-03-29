const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },  
  telefone: {
    type: Number,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  buscando: {
    type: String,
    required: true
  },
  vaga: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Empresa = mongoose.model('Empresa', empresaSchema);
module.exports = Empresa;