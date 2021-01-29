const Sequelize = require("sequelize");
const configDatabase = require("../config/database");
const Certificado = require("../models/Certificado");

const connection = new Sequelize(configDatabase);

Certificado.init(connection);
module.exports = connection;
