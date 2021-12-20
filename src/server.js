const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

mongoose.connect('mongodb://root:ROOT@localhost:27017/')
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number

}, {colection: 'usuarios'});

//CREATE
app.post('/', function(req, res){
    res.json({
        msg: "Hello minha API do meu POST"
    
    });

});

//READ
app.get('/', function(req, res){
    res.json({
        msg: "Hello minha API"
    });

});

//UPDATE
app.patch('/', function(req, res){
    res.json({
        msg: "Hello minha API do meu UPDATE"
    });
});

//READ
app.delete('/', function(req, res){
    res.json({
        msg: "Hello minha API do meu DELETE"
    });
});
app.listen(PORT, function(){
    console.log("Servidor funcionando corretamente!")
});