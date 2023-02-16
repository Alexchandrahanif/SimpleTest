"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jabatans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_departement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Departements",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Jabatans");
  },
};
