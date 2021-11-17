const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Movie;
