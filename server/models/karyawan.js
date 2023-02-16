"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Karyawan.belongsTo(models.Jabatan, {
        foreignKey: "id_jabatan",
      });
    }
  }
  Karyawan.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name Is Required",
          },
          notNull: {
            msg: "Name Is Required",
          },
        },
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Age Is Required",
          },
          notNull: {
            msg: "Age Is Required",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Gender Is Required",
          },
          notNull: {
            msg: "Gender Is Required",
          },
        },
      },
      tanggal_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tanggal Lahir Is Required",
          },
          notNull: {
            msg: "Tanggal Lahir Is Required",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Alamat Is Required",
          },
          notNull: {
            msg: "Alamat Is Required",
          },
        },
      },
      id_jabatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Jabatan Is Required",
          },
          notNull: {
            msg: "Id Jabatan Is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Karyawan",
    }
  );
  return Karyawan;
};
