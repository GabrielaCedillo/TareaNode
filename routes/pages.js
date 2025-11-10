const express = require ('express');
const path = require('path');
const router = express.Router();

router.get('/comparar',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/Calculadora.html'));
});
router.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/CarritoCompras.html'));
});
router.get('/calcula',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/CompararNumeros.html'));
});



module.exports=router;