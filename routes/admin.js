const express = require('express');
const router = express.Router();

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
    res.rend
})



module.exports = router