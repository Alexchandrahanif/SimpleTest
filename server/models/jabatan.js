"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jabatan.hasOne(models.Karyawan, {
        foreignKey: "id_jabatan",
      });
      Jabatan.belongsTo(models.Departement, {
        foreignKey: "id_departement",
      });
    }
  }
  Jabatan.init(
    {
      nama_jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Jabatan Is Required",
          },
          notNull: {
            msg: "Nama Jabatan Is Required",
          },
        },
      },
      id_departement: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Departement Is Required",
          },
          notNull: {
            msg: "Id Departement Is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Jabatan",
    }
  );
  return Jabatan;
};
