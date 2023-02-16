const Controller = require("../controller/jabatan");

const jabatanRouter = require("express").Router();

jabatanRouter.get("/", Controller.getAll);

jabatanRouter.get("/:id", Controller.getOne);

jabatanRouter.post("/", Controller.createJabatan);

jabatanRouter.patch("/:id", Controller.updateJabatan);

jabatanRouter.delete("/:id", Controller.deleteJabatan);

module.exports = jabatanRouter;
