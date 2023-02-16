"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username Is Required",
          },
          notNull: {
            msg: "Username Is Required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Must be Unique",
        },
        validate: {
          notEmpty: {
            msg: "Email Is Required",
          },
          notNull: {
            msg: "Email Is Required",
          },
          isEmail: {
            msg: "Must Be Format Email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password Is Required",
          },
          notNull: {
            msg: "Password Is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
