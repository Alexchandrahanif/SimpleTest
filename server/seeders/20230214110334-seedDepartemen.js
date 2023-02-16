"use strict";

const dataDepartement = require("../data/departement.json");

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

    dataDepartement.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Departements", dataDepartement, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Departements", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
