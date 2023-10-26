const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model('categorias');

router.get('/', function(req,res){
    res.render('./admin/index')
});

router.get('/posts', function(req,res){
    res.send('Página dos posts')
})

router.get('/categorias', function(res,res){
    res.render('./admin/categorias')
})

router.get('/categorias/add' , function(req, res){
    res.render('./admin/addcategorias')
})

router.post('/categorias/nova', function(req, res){
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categoria (novaCategoria).save().then(function(){
        console.log('Categoria Salva com Sucesso')
    }).catch(function(error){
        console.log('Houve um erro ao criar uma categoria: ' + error)
    });
})



module.exports = router