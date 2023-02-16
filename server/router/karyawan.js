const Controller = require("../controller/karyawan");

const karyawanRouter = require("express").Router();

karyawanRouter.get("/", Controller.getAll);

karyawanRouter.get("/:id", Controller.getOne);

karyawanRouter.post("/", Controller.createKaryawan);

karyawanRouter.patch("/:id", Controller.updateKaryawan);

karyawanRouter.delete("/:id", Controller.deleteKaryawan);

module.exports = karyawanRouter;
