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
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skill",
        key: "id",
      },
    },
    armor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "armor",
        key: "id",
      },
    },
    hit_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // I dont think we need character_spell_id and character_weapon_id here.
    charcter_spell_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "characterspell",
        key: "id",
      },
    },
    charcter_weapon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "characterweapon",
        key: "id",
      },
    },
    // if we want date stamps, we can just set the timestamps below to true.
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character",
  }
);

module.exports = Character;
