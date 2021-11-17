const sequelize = require("..db/donnection");
const { dataTypes } = require("sequelize");

const Actor = sequelize.define("Actor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  actor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Actor;
