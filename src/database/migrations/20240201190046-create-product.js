'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('UUID'),
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
        allowNull: false
      },
      discount: Sequelize.INTEGER,
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: Sequelize.UUID,
        references:{
            model: "Category", 
            key: "categoryId"
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};