const { Karyawan } = require("../models/index");

class Controller {
  // GET ALL KARYAWAN
  static async getAll(req, res, next) {
    const dataKaryawan = await Karyawan.findAll();

    // Sukses
    res.status(200).json({
      statusCode: 200,
      message: "Berhasil Menampilkan Semua Data Karyawan",
      data: dataKaryawan,
    });

    try {
    } catch (error) {
      next(error);
    }
  }

  // GET ONE KARYAWAN
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataKaryawan = await Karyawan.findByPk(id);

      if (!dataKaryawan) {
        throw { name: "Karyawan is Required" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Mendapatkan Data Detail Karyawan",
        data: dataKaryawan,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE KARYAWAN
  static async createKaryawan(req, res, next) {
    try {
      const { name, age, gender, alamat, id_jabatan } = req.body;

      const dataKaryawan = await Karyawan.create({
        name,
        age,
        gender,
        tanggal_lahir: new Date(),
        alamat,
        id_jabatan,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Menambahkan Data Karyawan Baru",
        data: dataKaryawan,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE KARYAWAN
  static async updateKaryawan(req, res, next) {
    try {
      const { id } = req.params;

      const { nama_karyawan } = req.body;

      const dataKaryawan = await Karyawan.findByPk(id);

      if (!dataKaryawan) {
        throw { name: "Karyawan is Required" };
      }

      const { name, age, gender, alamat, id_jabatan } = req.body;

      await Karyawan.update(
        {
          name,
          age,
          gender,
          tanggal_lahir: new Date(),
          alamat,
          id_jabatan,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Karyawan",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE KARYAWAN
  static async deleteKaryawan(req, res, next) {
    try {
      const { id } = req.params;

      const dataKaryawan = await Karyawan.findByPk(id);

      if (!dataKaryawan) {
        throw { name: "Karyawan is Required" };
      }

      await Karyawan.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Karyawan",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
