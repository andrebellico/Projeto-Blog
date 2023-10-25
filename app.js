// Carregando Módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');

//Config
    //BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    
        allowProtoMethodsByDefault: true,
    }}));
    app.set('view engine', 'handlebars');
    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1:27017/blogapp', {
    }).then(function(){
        console.log('Conectado ao Banco de Dados')
    }).catch(function(error){
      console.log('Houve um erro ao se conectar com o Banco de Dados: ' + error);})
    //Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas
app.use('/admin', admin);


//Outros
const PORT = 8080;
app.listen(PORT, function(){
    console.log('Servidor rodando na url: https://localhost:8080')
});
