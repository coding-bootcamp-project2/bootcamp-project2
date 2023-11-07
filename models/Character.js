const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "race",
        key: "id",
      },
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // skill_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "skill",
    //     key: "id",
    //   },
    // },
    // armor_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "armor",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "dndcharacter",
  }
);

module.exports = Character;
