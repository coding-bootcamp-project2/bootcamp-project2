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
            refernces: {
                model: 'user',
                key: 'id',
            }
          },
        class_id: {
            type: DataTypes.INTEGER,
            refernces: {
                model: 'class',
                key: 'id',
            }
        },
        race_id: {
            type: DataTypes.INTEGER,
            refernces: {
                model: 'race',
                key: 'id',
            }
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        skill: {
            type: DataTypes.INTEGER,
            refernces: {
                model: 'skill',
                key: 'id',
            }
        },
        armor: {
            type: DataTypes.INTEGER,
            refernces: {
                model: 'armor',
                key: 'id',
            }
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
      }
)

module.exports = Character