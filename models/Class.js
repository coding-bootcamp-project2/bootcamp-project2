const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Class extends Model {}

Class.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
      }
)

