/**
 * @module Requerimos el modulo de mongoose
 */
const mongoose = require('mongoose');

/**
 * Traemos nuestras variables de entorno
 * @param {string} hostBD - Pasamos host de la conexion
 * @param {string} nameDB - Pasamos nombre de la DB
 */
// const mongoDB = `mongodb://${process.env.hostDB}/${process.env.nameDB}`;
const mongoDB = process.env.mongoDB;

/**
 * @param {string} mongoDB - Pasamos la cadena de conexion de la DB
 */
mongoose.connect(mongoDB, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true
})
   .then((db) => console.log(`DB is connect to ${db.connection.host} - ${db.connection.name}...`))
   .catch((err) => console.log(err));