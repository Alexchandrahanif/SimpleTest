"use strict";

const dataKaryawan = require("../data/karyawan.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    dataKaryawan.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Karyawans", dataKaryawan, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Karyawans", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
