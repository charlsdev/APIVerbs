const express = require('express');
// const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

// Inicializaciones
const app = express();

// Configuración
app.set('port', process.env.PORT || 2021);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());                           //Interpreta los JSON que lleguen a mi aplicación
app.use(express.urlencoded({extended: false}));    //Para poder interpretar los datos de los form

// Rutas
app.use(require('./routes/index.routes'));

module.exports = app;