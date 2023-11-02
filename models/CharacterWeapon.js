const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class CharacterWeapon extends Model {}

CharacterWeapon.init(
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
    weapon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "weapon",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characterweapon",
  }
);

module.exports = CharacterWeapon;
