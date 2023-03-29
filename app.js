const express = require('express'); //Declarando a dependência do app "express"
const morgan = require('morgan'); //Declarando a dependência do app "morgan"
const mongoose = require('mongoose');  //Declarando a dependência do app "mongoose"
const Blog = require('./models/blog', './models/ifads', './models/pessoasti'); //Apontando os bancos de dados utilizados para a aplicação

const app = express(); //Utilizando o app "express"

const dbURI = 'mongodb+srv://fabiocr6:mCMsUGFxZF1am2Ze@cluster0.urt2d8b.mongodb.net/node-test?retryWrites=true&w=majority'; //Autenticação com o banco de dados na nuvem

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //Conexão e inicialização do banco de dados na aplicação
  .then(result => app.listen(3000)) //Especificando a porta na qual o endereço da aplicação será utilizada
  .catch(err => console.log(err)); //Instruindo a aplicação para escrever erros na tela, caso ocorram


app.set('view engine', 'ejs'); //Utilizando o app "ejs"

// middleware & static files
app.use(express.static('public')); //Declarando a pasta "public" como fonte de arquivos estáticos
app.use(express.urlencoded({ extended: true })); //Utilizando a função de rotas do express
app.use(morgan('dev'));  //Utilizando o app "morgan"
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs/registroifads', (req, res) => {
  res.render('registroifads', { title: 'Registrar aluno de ADS no IFSP' });
});

app.get('/blogs/registropessoasti', (req, res) => {
  res.render('registropessoasti', { title: 'Registrar pessoas que já trabalham com TI' });
});

app.get('/loginifads', (req, res) => {
  res.render('loginifads', { title: 'Login para Alunos IFSP' });
});

app.get('/empresa', (req,res) => {
  res.render('registroempresa', { title: 'Registro de vaga para empresas'});
});

app.get('/loginpessoasti', (req, res) => {
  res.render('loginpessoasti', { title: 'Login para profissionais' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});