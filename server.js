var express = require('express');
var mongoose  = require('mongoose');
var requireDir = require('require-dir');

// Iniciando o APP
const app = express();

// Iniciando o Banco de Dados
mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser:true,useUnifiedTopology:true})
requireDir("./src/models");

// Rotas
app.use("/api",require("./src/routes"));

app.listen(3001);