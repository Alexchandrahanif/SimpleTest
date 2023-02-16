"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Departement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Departement.hasOne(models.Jabatan, {
        foreignKey: "id_departement",
      });
    }
  }
  Departement.init(
    {
      nama_departement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Departement Is Required",
          },
          notNull: {
            msg: "Nama Departement Is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Departement",
    }
  );
  return Departement;
};
