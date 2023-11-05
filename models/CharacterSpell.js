const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class CharacterSpell extends Model {}

CharacterSpell.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dndcharacter",
        key: "id",
      },
    },
    spell_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "spell",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characterspell",
  }
);

module.exports = CharacterSpell;
