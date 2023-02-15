const adminRuter = require("./admin");
const departementRouter = require("./departement");
const jabatanRouter = require("./jabatan");
const karyawanRouter = require("./karyawan");

const router = require("express").Router();

router.use("/admin", adminRuter);
router.use("/departemen", departementRouter);
router.use("/jabatan", jabatanRouter);
router.use("/karyawan", karyawanRouter);

module.exports = router;
