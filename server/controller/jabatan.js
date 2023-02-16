const { Jabatan } = require("../models/index");

class Controller {
  // GET ALL JABATAN
  static async getAll(req, res, next) {
    const dataJabatan = await Jabatan.findAll();
    // Sukses
    res.status(200).json({
      statusCode: 200,
      message: "Berhasil Menampilkan Semua Data Jabatan",
      data: dataJabatan,
    });

    try {
    } catch (error) {
      next(error);
    }
  }

  // GET ONE JABATAN
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataJabatan = await Jabatan.findByPk(id);

      if (!dataJabatan) {
        throw { name: "Jabatan is Required" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Mendapatkan Data Detail Jabatan",
        data: dataJabatan,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE JABATAN
  static async createJabatan(req, res, next) {
    try {
      const { nama_jabatan, id_departement } = req.body;

      const dataJabatan = await Jabatan.create({
        nama_jabatan,
        id_departement,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Menambahkan Data Jabatan Baru",
        data: dataJabatan,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE JABATAN
  static async updateJabatan(req, res, next) {
    try {
      const { id } = req.params;

      const { nama_jabatan, id_departement } = req.body;

      const dataJabatan = await Jabatan.findByPk(id);

      if (!dataJabatan) {
        throw { name: "Jabatan is Required" };
      }

      await Jabatan.update(
        {
          nama_jabatan,
          id_departement,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Jabatan",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE JABATAN
  static async deleteJabatan(req, res, next) {
    try {
      const { id } = req.params;

      const dataJabatan = await Jabatan.findByPk(id);

      if (!dataJabatan) {
        throw { name: "Jabatan is Required" };
      }

      await Jabatan.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Jabatan",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
