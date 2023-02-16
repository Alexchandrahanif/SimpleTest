const { Departement } = require("../models/index");

class Controller {
  // GET ALL DEPARTEMENTS
  static async getAll(req, res, next) {
    const dataDepartement = await Departement.findAll();

    // Sukses
    res.status(200).json({
      statusCode: 200,
      message: "Berhasil Menampilkan Semua Data Departement",
      data: dataDepartement,
    });

    try {
    } catch (error) {
      next(error);
    }
  }

  // GET ONE DEPARTEMENT
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataDepartement = await Departement.findByPk(id);

      if (!dataDepartement) {
        throw { name: "Departement is Required" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Mendapatkan Data Detail Departement",
        data: dataDepartement,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE DEPARTEMENT
  static async createDepartement(req, res, next) {
    try {
      const { nama_departement } = req.body;

      const dataDepartement = await Departement.create({
        nama_departement,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Menambahkan Data Departement Baru",
        data: dataDepartement,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE DEPARTEMENT
  static async updateDepartement(req, res, next) {
    try {
      const { id } = req.params;

      const { nama_departement } = req.body;

      const dataDepartement = await Departement.findByPk(id);

      if (!dataDepartement) {
        throw { name: "Departement is Required" };
      }

      await Departement.update(
        {
          nama_departement,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Departement",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE DEPARTEMENT
  static async deleteDepartement(req, res, next) {
    try {
      const { id } = req.params;

      const dataDepartement = await Departement.findByPk(id);

      if (!dataDepartement) {
        throw { name: "Departement is Required" };
      }

      await Departement.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Departement",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
