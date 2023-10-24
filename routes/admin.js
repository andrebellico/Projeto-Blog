const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    res.render('./admin/index')
});

router.get('/posts', function(req,res){
    res.send('Página dos posts')
})

router.get('/categorias', function(res,res){
    res.send('Página de categorias')
})



module.exports = router