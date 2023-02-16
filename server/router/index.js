const router = require("express").Router();

const adminRuter = require("./admin");
const departementRouter = require("./departement");
const jabatanRouter = require("./jabatan");
const karyawanRouter = require("./karyawan");

router.use("/admin", adminRuter);
router.use("/departement", departementRouter);
router.use("/jabatan", jabatanRouter);
router.use("/karyawan", karyawanRouter);

module.exports = router;
