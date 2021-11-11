const { Sequelize } = require("sequelize");
require("dontenv").config();
const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();
// this tests

module.exports = sequelize;
