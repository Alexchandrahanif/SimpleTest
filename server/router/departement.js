const Controller = require("../controller/departement");

const departementRouter = require("express").Router();

departementRouter.get("/", Controller.getAll);

departementRouter.get("/:id", Controller.getOne);

departementRouter.post("/", Controller.createDepartement);

departementRouter.patch("/:id", Controller.updateDepartement);

departementRouter.delete("/:id", Controller.deleteDepartement);

module.exports = departementRouter;
