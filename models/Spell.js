const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Spell extends Model {}

Spell.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // add a name column
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spell",
  }
);

module.exports = Spell;
