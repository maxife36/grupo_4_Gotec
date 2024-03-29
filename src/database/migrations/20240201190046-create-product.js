"use strict";
/** @type {import("sequelize-cli").Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      productBrand: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      shortDescription: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      longDescription: Sequelize.STRING(200),
      productPrice: {
        type: Sequelize.INTEGER,
        unsigned: true,
        allowNull: false
      },
      discount: Sequelize.INTEGER,
      stock: {
        type: Sequelize.INTEGER,
        unsigned: true,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        unsigned: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  }
};