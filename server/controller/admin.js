const { comparePassword, createAccessToken } = require("../helper/helper");
const { Admin } = require("../models/index");

class Controller {
  // REGISTER
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      await Admin.create({
        username,
        email,
        password,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Register",
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "Email is Required" };
      }

      if (!password) {
        throw { name: "Password is Required" };
      }

      const dataAdmin = await Admin.findOne({
        where: {
          email,
        },
      });

      if (!dataAdmin) {
        throw { name: "Invalid email/password" };
      }

      if (!comparePassword(password, dataAdmin.password)) {
        throw { name: "Invalid email/password" };
      }

      const payload = {
        id: dataAdmin.id,
        email: dataAdmin.email,
      };

      const access_token = createAccessToken(payload);

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Login",
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
