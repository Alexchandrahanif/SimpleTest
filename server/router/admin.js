const Controller = require("../controller/admin");

const adminRuter = require("express").Router();

adminRuter.post("/register", Controller.register);

adminRuter.post("/login", Controller.login);

module.exports = adminRuter;
