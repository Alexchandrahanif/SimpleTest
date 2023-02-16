"use strict";
const dataAdmin = require("../data/admin.json");
const { hashingPassword } = require("../helper/helper");

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

    dataAdmin.forEach((el) => {
      el.password = hashingPassword(el.password);
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Admins", dataAdmin, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
