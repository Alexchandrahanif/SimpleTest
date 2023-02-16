"use strict";

const dataJabatan = require("../data/jabatan.json");

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
    dataJabatan.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Jabatans", dataJabatan, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jabatans", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
