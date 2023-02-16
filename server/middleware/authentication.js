const { Admin } = require("../models");
const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    let payload = verifyAccessToken(access_token);
    let dataAdmin = await Admin.findByPk(payload.id);
    if (!dataAdmin) {
      throw { name: "Invalid access_token" };
    }

    req.user = {
      id: dataUser.id,
      email: dataUser.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
